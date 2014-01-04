define.Class("nir.Animal", function(def){

    def.methods = {
        __init: function(name) {
            this._name = name ;
        },

        getName: function() {
            return this._name ;
        },

        speak: function() {
            // TODO NMO 12/30/13 12:15 AM - abstract method to implement by inheriting classes.
        }
    } ;

});