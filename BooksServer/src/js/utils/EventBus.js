define.Class("utils.EventBus", function(def) {

    def.methods = {
        __init: function() {
            this._eventMap = {} ;
        },

        fireEvent: function(eventName, data) {
            var listeners = this._eventMap[eventName] ;
            for(var i=0; i < listeners.length; i++) {
                var listener = listeners[i] ;
                listener.handler.apply(listener.listener, [eventName, data]) ;
            }
        },

        addListener: function(eventName, scope, handlerFunction) {
            var listeners = this._eventMap[eventName] ;
            if(!listeners) {
                listeners = [] ;
                this._eventMap[eventName] = listeners ;
            }
            listeners.push({listener: scope, handler: handlerFunction}) ;
        }
    };

}) ;