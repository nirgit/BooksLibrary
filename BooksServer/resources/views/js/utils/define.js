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

            // creation
            var classObj = {} ;
            classDef(classObj) ;
            var readyClass = this._buildClass(classFullName, classObj) ;
            if(readyClass) {
                this._classes[classFullName] = readyClass ;
            }
        },

        _isClassDefined: function(className) {
            return !!this._classes[className] ;
        },

        _buildClass: function(classFullName, classObj) {
            if(!classObj) {
                return null ;
            }

            // take the c'tor
            var classCtor   = classObj.methods["init"] ;

            if(!classCtor) {
                console.error("Class does not have an init method (c'tor).") ;
                return null ;
            }
            var className               = classFullName.split(".")[classFullName.split(".").length-1] ;
            var $Class                   = (new Function("ctor", 'return function ' + className + '(){ return ctor.apply(this, arguments);}'))(classCtor) ;

            var $classPrototype          = {} ;
            for(method in classObj.methods) {
                if(method !== "init") {
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
