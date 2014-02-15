/** This file describes an abstract/basic view of the application */

/**
*   C'tor
*/
define.Class("views.BaseView", function(def) {
    def.methods = {
        __init: function(node, args) {
            this._node = node ;
            this._args = args ;
        },

        go: function(view, args) {
            if(!view && !this._node) {
                return ;
            }
            if(!this._node) {
                this._node = view ;
            }
            var node = view || this._node ;
            this._render(node, args) ;
        },

        _getPart: function(partName) {
            return this._node.querySelector("[part=" + partName + "]") ;
        },

        asElement: function() {
            return this._node ;
        },

        // MUST be overriden in sub-classes.
        _render: function(view, args) {
            // TODO NMO 12/28/13 10:15 PM - this is an abstract implementation that does nothing.
        }
    } ;
}) ;