define.Class("controllers.BooksListController", function(def) {

    def.methods = {
        __init: function(booksListView) {
            this._view = booksListView ;
            // Build View
            this._view.go() ;
            // manipulate...

            this._view.getSearchInput().value = "Hey dude... i'm your controller!" ;
        },

        showBooksList: function() {
            var $this = this ;
            $.get("../api/book/getAllBooks", function(booksData) {
                if(booksData) {
                    for(var i=0; i < booksData.length; i++) {
                        var book = booksData[i] ;
                        $this._addBookToList(book) ;
                    }
                }
            }) ;
        },

        _addBookToList: function(book) {
            var bookHook        = new Element("div") ;
            var bookView        = new views.BookView(bookHook) ;
            var bookController  = new controllers.BookController(bookView, book) ;
            this._view.getBooksListHook().appendChild(bookView.asElement()) ;
        }
    }

}) ;