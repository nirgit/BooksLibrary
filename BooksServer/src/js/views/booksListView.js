define.Class("views.BooksListView", function(def) {

    def.extends = "views.BaseView" ;

    def.statics = {
        fields: [
            ["STYLES", {
                "BOOK_SEARCH": ".bookSearchContainer {margin-bottom: 10px; background: bisque; height: 30px; width: 230px; padding: 10px;}"
            }]
        ],

        methods: {
            $init: function() {
                this._initStyles() ;
            },

            _initStyles: function() {
                var style = new Element("style") ;
                style.innerHTML += this.STYLES.BOOK_SEARCH ;
                document.head.appendChild(style) ;
            }
        }
    } ;

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
            var searchHTMLFragment = '<div id="bookSearch" class="bookSearchContainer">' +
                '<span id="searchTitle">Search:</span>' +
                '<input id="bookNameToSearch" type="text" placeholder="Enter a book name..." maxlength="100"/>' +
                '</div>';
            var searchContainer = new Element("div") ;
            searchContainer.innerHTML = searchHTMLFragment ;
            return searchContainer ;
        },

        _createBookList: function() {
            var bookList = new Element("div", {width: "100%", height: "100%", border: "4px solid purple", overflow: "auto"}) ;
            return bookList ;
        },

        _render: function(view) {
            view.appendChild(this._title) ;
            view.appendChild(this._search) ;
            view.appendChild(this._bookList) ;
        }
    } ;
}) ;