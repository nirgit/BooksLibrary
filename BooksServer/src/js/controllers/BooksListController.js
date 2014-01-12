define.Class("controllers.BooksListController", function(def) {

    def.methods = {
        __init: function(booksListView) {
            this._view = booksListView ;
            // Build View
            this._view.go() ;
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
            var bookLi = new Element("li") ;
            bookLi.innerHTML = book.name + " / " + book.author + " (" + book.year + ")" ;
            this._view.getBooksListHook().appendChild(bookLi) ;
        }
    }

}) ;