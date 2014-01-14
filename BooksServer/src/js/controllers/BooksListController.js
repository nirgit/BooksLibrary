define.Class("controllers.BooksListController", function(def) {

    def.methods = {
        __init: function(booksListView, eventBus) {
            this._eventBus  = eventBus ;
            this._view      = booksListView ;
            // Build View
            this._view.go() ;
            // manipulate...
            this._bindSearch() ;
        },

        _bindSearch: function() {
            var searchInput = this._view.getSearchInput() ;
            searchInput.placeholder = "Search a book" ;
            searchInput.value = "" ;
            $(searchInput).on("keyup", this._filterBooks.bind(this)) ;
        },

        _filterBooks: function() {
            var searchInput = this._view.getSearchInput() ;
            this._eventBus.fireEvent("BOOKS_FILTER", {filter: searchInput.value}) ;
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
            var bookController  = new controllers.BookController(bookView, book, this._eventBus) ;
            this._view.getBooksListHook().appendChild(bookView.asElement()) ;
        }
    }

}) ;