define.Class("controllers.BookController", function(def) {

    def.methods = {
        __init: function(bookView, bookModel) {
            this._view      = bookView ;
            this._bookModel = bookModel ;
            // Build View
            this._bindBookModelToView() ;
        },

        _bindBookModelToView: function() {
            this._view.getTitle().innerHTML = this._bookModel.name ;
            this._view.getAuthor().innerHTML = this._bookModel.author ;
            this._view.getYear().innerHTML = this._bookModel.year ;
            this._view.getOwner().innerHTML = this._bookModel.owner.name + " - " + this._bookModel.owner.email ;
        }
    }
}) ;