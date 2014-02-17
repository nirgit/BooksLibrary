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
                                        "font-size: 20px; height: 250px; width: 190px; margin: 40px; text-align: center; word-wrap: break-word;" +
                                        "box-shadow: 5px 5px 15px 2px gray;}",
                        'BOOK_TITLE':   ".book-title { color: cadetblue; font-family: sans-serif; font-size: 22px; font-weight: lighter;" +
                                        "margin: 5px; text-align: center; word-wrap: break-word; height: 50px}",
                        'BOOK_YEAR':    ".book-year {font-size: 16px; font-family: serif;}",
                        'BOOK_OWNER':   ".book-owner {font-size: 14px; position: relative; top: 20%}",
                        'BOOK_HOVER':   ".bookHover {box-shadow: 0px 0px 40px 10px white;}"
                     }
            ],
            ["$skin", null],
            ['PARTS', {
                        CONTAINER: "bookContainer",
                        TITLE: "title",
                        AUTHOR: "author",
                        YEAR: "year",
                        OWNER: "owner"
            }]
        ],
        methods: {
            $init: function() {
                this._createBookStyle() ;
                this.$skin = this._createSkin() ;
            },

            _createBookStyle: function() {
                var style = new Element("style") ;
                for(var s in this.STYLES) {
                    style.innerHTML += this.STYLES[s] ;
                }
                document.head.appendChild(style) ;
            },

            _createSkin: function() {
                var bookContainer     = this._createBookHeader(this.PARTS.CONTAINER) ;
                var title             = this._createBookHeader(this.PARTS.TITLE, this.CLASS_TITLE_SUB_STYLE_NAME) ;
                var author            = this._createBookHeader(this.PARTS.AUTHOR, this.CLASS_AUTHOR_SUB_STYLE_NAME) ;
                var year              = this._createBookHeader(this.PARTS.YEAR, this.CLASS_YEAR_SUB_STYLE_NAME) ;
                var owner             = this._createBookHeader(this.PARTS.OWNER, this.CLASS_OWNER_SUB_STYLE_NAME) ;

                bookContainer.appendChild(title) ;
                bookContainer.appendChild(author) ;
                bookContainer.appendChild(year) ;
                bookContainer.appendChild(owner) ;

                return bookContainer ;
            },

            _createBookHeader: function(partName, subStyleName) {
                var element = new Element("div") ;
                element.setAttribute("part", partName) ;
                element.className = utils.createClassStyle(this.CLASS_STYLE_NAME, subStyleName) ;
                return element ;
            }
        }
    } ;

    def.methods = {
        __init: function(node, args) {
            this.super(node, args) ;
            this.go() ;
        },

        getContainer: function() {
            return this._getPart(this.PARTS.CONTAINER) ;
        },

        getTitle: function() {
            return this._getPart(this.PARTS.TITLE) ;
        },

        getAuthor: function() {
            return this._getPart(this.PARTS.AUTHOR) ;
        },

        getYear: function() {
            return this._getPart(this.PARTS.YEAR) ;
        },

        getOwner: function() {
            return this._getPart(this.PARTS.OWNER) ;
        },

        _render: function(node) {
            var bookSkinInstance = this.$skin.cloneNode(true) ;
            node.appendChild(bookSkinInstance) ;
        }
    }
}) ;