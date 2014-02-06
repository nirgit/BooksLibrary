define.Class("controllers.BookLendController", function(def) {

    def.methods = {
        __init: function(dialogView, eventBus) {
            this._view      = dialogView ;
            this._eventBus  = eventBus ;
            this._bind() ;
            this.hide() ;
        },

        _bind: function() {
            // bind events.
            this._eventBus.addListener("SHOW_LEND_DIALOG", this, this.show) ;
            this._eventBus.addListener("HIDE_LEND_DIALOG", this, this.hide) ;
            // calc on resize...
            window.addEventListener("resize", this._calcPosition.bind(this)) ;
            // events on view.
            $(this._view.getCancel()).on("click", this.hide.bind(this)) ;
        },

        show: function() {
            this._calcPosition() ;
            this._view.asElement().style.display = "block" ;
        },

        _calcPosition: function() {
            this._view.asElement().style.left = (utils.getScreenWidth() - this._getWidth()) / 2 + "px" ;
        },

        _getWidth: function() {
//            return this._view.asElement().offsetWidth ;
            return this._view.getWidth() ;
        },

        hide: function() {
            this._view.asElement().style.display = "none" ;
        }
    }
}) ;