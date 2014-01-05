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

        go: function() {
            this._render(this._node) ;
        },

        // MUST be overriden in sub-classes.
        _render: function(view) {
            // TODO NMO 12/28/13 10:15 PM - this is an abstract implementation that does nothing.
        }
    } ;
}) ;