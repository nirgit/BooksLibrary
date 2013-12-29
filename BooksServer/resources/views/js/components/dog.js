define.Class("nir.Dog", function(def) {
    def.methods = {
        init: function(name) {
            this._name = name ;
        },

        bark: function() {
            console.log(this._name + " says: Woof! Woof!") ;
        }
    } ;
}) ;