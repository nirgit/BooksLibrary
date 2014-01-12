define.Class("views.BooksListView", function(def) {

    def.extends = "views.BaseView" ;

    def.methods = {
        __init: function(node, args) {
            this.super(node, args) ;
            this._createViewElements() ;
        },

        getBooksListHook: function() {
            return this._bookList ;
        },

        _createViewElements: function(){
            this._title = this._createTitle() ;
            this._bookList = this._createBookList() ;
        },

        _createTitle: function() {
            var title = new Element("div") ;
            title.innerHTML = "Library Books" ;
            return title ;
        },

        _createBookList: function() {
            var bookList = new Element("div", {width: "800px", height: "500px", position: "absolute", border: "4px solid purple"}) ;
            bookList.innerHTML = "The actual book list..." ;
            return bookList ;
        },

        _render: function(view) {
            view.appendChild(this._title) ;
            view.appendChild(this._bookList) ;
        }
    } ;
}) ;