define.Class("nir.Animal", function(def){

    def.methods = {
        __init: function(name) {
            this._name = name ;
        },

        getName: function() {
            return this._name ;
        },

        speak: function() {
            console.log("My name is " + this._name) ;
        }
    } ;

});
