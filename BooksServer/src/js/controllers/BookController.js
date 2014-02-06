define.Class("controllers.BookController", function(def) {

    def.methods = {
        __init: function(bookView, bookModel, eventBus) {
            this._view      = bookView ;
            this._bookModel = bookModel ;
            // Build View
            this._bindBookModelToView() ;
            this._bindEvents(eventBus) ;
        },

        _bindEvents: function(eventBus) {
            eventBus.addListener("BOOKS_FILTER", this, this._filterHandler) ;

            $(this._view.asElement()).on("click", function() {
                console.log("You chose %s", this._bookModel.name) ;
            }.bind(this)) ;
        },

        _filterHandler: function(eventName, data) {
            var bookName = this._bookModel.name.toLowerCase() ;
            if(bookName.indexOf(data.filter.toLowerCase()) >= 0) {
                this._view.asElement().style.display = "block" ;
            } else {
                this._view.asElement().style.display = "none" ;
            }
        },

        _bindBookModelToView: function() {
            this._view.getTitle().innerHTML = this._bookModel.name ;
            this._view.getAuthor().innerHTML = this._bookModel.author ;
            this._view.getYear().innerHTML = this._bookModel.year ;
            this._view.getOwner().innerHTML = this._bookModel.owner.name + " - " + this._bookModel.owner.email ;
        }
    }
}) ;