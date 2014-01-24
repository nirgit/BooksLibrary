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
        _isClassDefined: function(className) {
            return !!this._classes[className] ;
        },

        getClass: function(classFullName) {
            return this._classes[classFullName] ;
        },

        Class: function(classFullName, ClassDef) {
            // validation
            if(!this._shouldCreateClass(classFullName, ClassDef)) ;

            // creation of definition
            var defInstance = {} ;
            ClassDef(defInstance) ;
            var $classProto = this._createClassPrototype(defInstance, classFullName) ;

            var readyClass = this._buildClass(classFullName, defInstance, $classProto) ;
            if(readyClass) {
                this._setClass(classFullName, readyClass) ;
            }
        },

        _setClass: function(classFullName, classInstance) {
            if(!classFullName || !classInstance) return ;
            this._classes[classFullName] = classInstance ;
            // place it in it's own namespace.
            this._putClassInNamespace(window, classFullName, classInstance) ;
        },

        _putClassInNamespace: function(scope, classFullName, classInstance) {
            if(!classFullName || !classInstance) return ;
            var nameSplit = classFullName.split(".") ;
            if(nameSplit.length === 1) {
                scope[classFullName] = classInstance ;
            } else {
                var first = nameSplit.shift() ;
                scope[first] = scope[first] || {} ;
                this._putClassInNamespace(scope[first], nameSplit.join("."), classInstance) ;
            }
        },

        _shouldCreateClass: function(classFullName, ClassDef) {
            var isValid = true ;
            if(!classFullName || !ClassDef) {
                isValid = false ;
                console.error("Definition of class must have a classFullName and definition.") ;
            }
            return isValid ;
        },

        _createClassPrototype: function(defInstance, classFullName) {
            if(!defInstance.extends) {
                return null ;
            } else {
                // validate the existence of the parent.
                if(!this._isClassDefined(defInstance.extends)) {
                    console.error("Class %s to inherit, is not defined. Can't create class %s", defInstance.extends, classFullName) ;
                    return null ;
                }
                // inherit the parent
                var parentClass = this.getClass(defInstance.extends) ;
                return parentClass ;
            }
        },

        _buildClass: function(classFullName, classObj, parentClass) {
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

            // add definition methods.
            var classPrototype = this._resolveClassPrototype(parentClass, $Class) ;
            this._addMethodsToClassPrototype(classPrototype, classObj) ;
            this._addStaticsToClassPrototype(classPrototype, classObj) ;
            this._addSuperMethodToClassPrototype(classPrototype) ;

            $Class.prototype = classPrototype ;
            // in case there is a static Init
            if(classObj && classObj.statics && classObj.statics.methods && classObj.statics.methods["__init"]) {
                var staticInit = classObj.statics.methods["__init"] ;
                staticInit.apply(classObj) ;
            }
            return $Class ;
        },

        _resolveClassPrototype: function(parentClass, $Class) {
            var classPrototype ;
            if(parentClass) {
                classPrototype = new parentClass() ;
            } else {
                classPrototype = $Class.prototype ;
            }
            return classPrototype ;
        },

        _addMethodsToClassPrototype: function(classPrototype, classDef) {
            if(!classPrototype || !classDef || !classDef.methods) {
                return;
            }
            for(var method in classDef.methods) {
                classPrototype[method]              = classDef.methods[method] ;
                classPrototype[method].$methodName  = method ;
            }
        },

        _addStaticsToClassPrototype: function(classPrototype, classDef) {
            if(!classPrototype || !classDef || !classDef.statics) {
                return;
            }
            // define the static fields.
            var staticFields = classDef.statics.fields ;
            if(staticFields) {
                for(var i=0; i < staticFields.length; i++) {
                    var keyValuePair                = staticFields[i] ;
                    if(keyValuePair && keyValuePair.length > 1) {
                        classPrototype[keyValuePair[0]] = keyValuePair[1] ;
                    }
                }
            }
            // define the static methods! - binding the methods to the class!
            var staticMethods = classDef.statics.methods ;
            if(staticMethods) {
                for(var methodName in staticMethods) {
                    var staticFunction              = staticMethods[methodName] ;
                    if(staticFunction) {
                        staticFunction = staticFunction.bind(classPrototype) ;
                    }
                    classPrototype[methodName] = staticFunction ;
                }
            }
        },

        _addSuperMethodToClassPrototype: function(classPrototype) {
            if(!classPrototype) {return ;}
            classPrototype.super = function() {
                var callerFunction = arguments.callee.caller.$methodName ;
                classPrototype.__proto__[callerFunction].apply(this, arguments) ;
            }
        }
    } ;

    for(m in methods) {
        Define.prototype[m] = methods[m] ;
    }

    return new Define() ;
})() ;
