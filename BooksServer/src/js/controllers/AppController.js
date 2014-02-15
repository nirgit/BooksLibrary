define.Class("controllers.AppController", function(def) {

    def.methods = {
        __init: function(eventBus, view) {
            this._eventBus = eventBus ;
            this._view = view ;
        },

        go: function() {
            this._view.go() ;
            this._createContent() ;
            this._booksListController.showBooksList() ;
        },

        _createContent: function() {
            var dialogsView = this._view.getDialogView() ;
            this._bookLendDialog = new controllers.BookLendDialogController(dialogsView, this._eventBus) ;

            var booksListView = this._view.getBooksView() ;
            this._booksListController = new controllers.BooksListController(booksListView, this._eventBus) ;
        }
    } ;
}) ;