/**
*   Root of all (evil) defines in the client.
*/
window.define = (function() {
    function Define() {
        if(!this._classes) {
            this._classes = {} ;
        }
    }

    var methods = {
        getClass: function(classFullName) {
            return this._classes[classFullName] ;
        },

        Class: function(classFullName, classDef) {
            if(!classFullName || !classDef) {
                console.log("Definition of class must have a classFullName and definition.") ;
                return ;
            }
            // validation
            if(this._isClassDefined(classDef)) {
                return ;
            }

            // creation of definition
            var classObj = {} ;
            classDef(classObj) ;

            classObj = this._inheritParents(classObj) ;
            if(!classObj) {
                console.error("Inheritance of class failed. Failed creating class " + classFullName) ;
                return ;
            }

            var readyClass = this._buildClass(classFullName, classObj) ;
            if(readyClass) {
                this._classes[classFullName] = readyClass ;
            }
        },

        _isClassDefined: function(className) {
            return !!this._classes[className] ;
        },

        _inheritParents: function(classObj) {
            if(!classObj.extends) {
                return classObj ;
            } else {
                // validate the existence of the parent.
                if(!this._isClassDefined(classObj.extends)) {
                    console.error("Class " + classObj.extends + " to inherit, is not defined.") ;
                    return null ;
                }
                // inherit the parent
                var parentClass     = this.getClass(classObj.extends) ;
                classObj.prototype  = new parentClass() ;
                return classObj ;
            }
        },

        _buildClass: function(classFullName, classObj) {
            if(!classObj) {
                return null ;
            }

            // take the c'tor
            var classCtor   = classObj.methods["__init"] ;

            if(!classCtor) {
                console.error("Class does not have an '__init' method (c'tor).") ;
                return null ;
            }
            var className               = classFullName.split(".")[classFullName.split(".").length-1] ;
            var $Class                  = (new Function("ctor", 'return function ' + className + '(){ return ctor.apply(this, arguments);}'))(classCtor) ;

            var $classPrototype         = function (){} ;
            // add parent prototype
            if(classObj.prototype) {
                $classPrototype.prototype = classObj.prototype ;
            }

            // add definition methods.
            for(method in classObj.methods) {
                if(method !== "__init") {
                    $classPrototype[method] = classObj.methods[method] ;
                }
            }

            $Class.prototype = $classPrototype ;
            return $Class ;
        }
    } ;

    for(m in methods) {
        Define.prototype[m] = methods[m] ;
    }

    return new Define() ;
})() ;
