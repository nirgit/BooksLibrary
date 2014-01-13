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

        getSearchInput: function() {
            return $(this._search).find("#bookNameToSearch")[0] ;
        },

        _createViewElements: function(){
            this._title     = this._createTitle() ;
            this._search    = this._createSearch() ;
            this._bookList  = this._createBookList() ;
        },

        _createTitle: function() {
            var title = new Element("div") ;
            title.innerHTML = "Library Books" ;
            return title ;
        },

        _createSearch: function() {
            var searchHTMLFragment = '<div id="bookSearch">' +
                '<input id="bookNameToSearch" type="text" placeholder="Enter a book name..." maxlength="100"/>' +
                '<span id="searchButton" class="button">Search!</span>' +
                '</div>';
            var searchContainer = new Element("div") ;
            searchContainer.innerHTML = searchHTMLFragment ;
            return searchContainer ;
        },

        _createBookList: function() {
            var bookList = new Element("div", {width: "100%", height: "100%", border: "4px solid purple", overflow: "auto"}) ;
            bookList.innerHTML = "The actual book list..." ;
            return bookList ;
        },

        _render: function(view) {
            view.appendChild(this._title) ;
            view.appendChild(this._search) ;
            view.appendChild(this._bookList) ;
        }
    } ;
}) ;