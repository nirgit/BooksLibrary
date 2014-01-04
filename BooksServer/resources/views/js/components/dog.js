define.Class("nir.Dog", function(def) {

    def.extends = "nir.Animal" ;

    def.methods = {
        __init: function(name) {
            this._name = name ;
        },

        speak: function() {
            console.log(this._name + " says: Woof! Woof!") ;
        }
    } ;
}) ;