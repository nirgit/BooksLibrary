define.Class("views.BookView", function(def) {

    def.extends = "views.BaseView" ;

    def.statics = {
        fields: [
            ['CLASS_STYLE_NAME', "book"],
            ['CLASS_TITLE_SUB_STYLE_NAME', "title"],
            ['CLASS_AUTHOR_SUB_STYLE_NAME', "author"],
            ['CLASS_YEAR_SUB_STYLE_NAME', "year"],
            ['CLASS_OWNER_SUB_STYLE_NAME', "owner"],
            ['STYLES', {
                        'BOOK':         ".book {background: url(imgs/book.jpg) 214px 266px; color: white; float: left; font-family: sans-serif;" +
                                        "font-size: 20px; height: 250px; width: 190px; margin: 10px; text-align: center; word-wrap: break-word;" +
                                        "box-shadow: 5px 5px 15px 2px gray;}",
                        'BOOK_TITLE':   ".book-title { color: cadetblue; font-family: sans-serif; font-size: 22px; font-weight: lighter;" +
                                        "margin: 5px; text-align: center; word-wrap: break-word; height: 50px}",
                        'BOOK_YEAR':    ".book-year {font-size: 16px; font-family: serif;}",
                        'BOOK_OWNER':   ".book-owner {font-size: 14px; position: relative; top: 20%}"
                     }
            ]
        ],
        methods: {
            $init: function() {
                this._createBookStyle() ;
            },

            _createBookStyle: function() {
                var style = new Element("style") ;
                style.innerHTML += this.STYLES.BOOK ;
                style.innerHTML += this.STYLES.BOOK_TITLE ;
                style.innerHTML += this.STYLES.BOOK_YEAR ;
                style.innerHTML += this.STYLES.BOOK_OWNER ;

                document.head.appendChild(style) ;
            },
        }
    } ;

    def.methods = {
        __init: function(node, args) {
            this.super(node, args) ;
            this.go() ;
        },

        getTitle: function() {
            return this._title ;
        },

        getAuthor: function() {
            return this._author ;
        },

        getYear: function() {
            return this._year ;
        },

        getOwner: function() {
            return this._owner ;
        },

        _render: function(node) {
            var bookContainer       = new Element("div") ;
            bookContainer.className = this.CLASS_STYLE_NAME ;
            this._title             = this._createBookHeader(this.CLASS_TITLE_SUB_STYLE_NAME) ;
            this._author            = this._createBookHeader(this.CLASS_AUTHOR_SUB_STYLE_NAME) ;
            this._year              = this._createBookHeader(this.CLASS_YEAR_SUB_STYLE_NAME) ;
            this._owner             = this._createBookHeader(this.CLASS_OWNER_SUB_STYLE_NAME) ;

            bookContainer.appendChild(this._title) ;
            bookContainer.appendChild(this._author) ;
            bookContainer.appendChild(this._year) ;
            bookContainer.appendChild(this._owner) ;

            node.appendChild(bookContainer) ;
        },

        _createBookHeader: function(subStyleName) {
            var element = new Element("div") ;
            element.className = utils.createClassStyle(this.CLASS_STYLE_NAME, subStyleName) ;
            return element ;
        }
    }
}) ;