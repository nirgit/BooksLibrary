define.Class("views.BookLendView", function(def) {

    def.extends = "views.BaseView" ;

    def.statics = {
        fields: [
            ['WIDTH', 300],
            ['CLASS_STYLE_NAME', "lend-book"],
            ['CLASS_TITLE_SUB_STYLE_NAME', "title"],
            ['CLASS_AUTHOR_SUB_STYLE_NAME', "author"],
            ['CLASS_YEAR_SUB_STYLE_NAME', "year"],
            ['CLASS_OWNER_SUB_STYLE_NAME', "owner"],
            ['STYLES', {
                        'BOOK-LEND-DIALOG': ".book-lend-dialog {background: url(imgs/book.jpg); color: white; font-family: sans-serif; position: fixed;" +
                                            "font-size: 20px; height: 400px; width: 300px; top: 25%; text-align: center; word-wrap: break-word;" +
                                            "box-shadow: 0px -5px 50px 10px white;}",
                        'BOOK-LEND_AUTHOR': ".book-lend-author {font-size: 20px; font-family: serif;}",
                        'BOOK-LEND_TITLE':  ".book-lend-title { color: cadetblue; font-family: sans-serif; font-size: 22px; font-weight: lighter;" +
                                            "margin: 5px; text-align: center; word-wrap: break-word; height: 50px}",
                        'BOOK-LEND_YEAR':   ".book-lend-year {font-size: 16px; font-family: serif;}",
                        'BOOK-LEND_OWNER':  ".book-lend-owner {font-size: 14px; position: relative; top: 20%}"
                     }
            ],
            ["$skin", null],
            ['PARTS', {
                        TITLE: "bookTitle",
                        AUTHOR: "bookAuthor",
                        YEAR: "bookYear",
                        OWNER: "bookOwner",
                        CANCEL: "cancelButton",
                        OK: "okButton"
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
                var container       = new Element("div")
                container.className ='book-lend-dialog' ;
                container.setAttribute("part", "container") ;
                var skinBody        = "" +
                                    "<div part='dialogTitle'>Lend a book</div>" +
                                    "<div part='dialogBody'>" +
                                        "<div part='bookTitle' class='book-lend-title'>mock title</div>" +
                                        "<div part='bookAuthor' class='book-lend-author'>mock author john doe</div>" +
                                        "<div part='bookYear' class='book-lend-year'>1999</div>" +
                                        "<div part='bookOwner' class='book-lend-owner'>Alice</div>" +
                                    "</div>" +
                                    "<div part='dialogControls'>" +
                                        "<div part='cancelButton'>Cancel</div>" +
                                        "<div part='okButton'>Ok</div>" +
                                    "</div>" ;
                container.innerHTML = skinBody ;
                return container ;
            }
        }
    } ;

    def.methods = {
        __init: function(node, args) {
            this.super(node, args) ;
            this.go() ;
        },

        getWidth: function() {
            return this.WIDTH ;
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

        getCancel: function() {
            return this._getPart(this.PARTS.CANCEL) ;
        },

        asElement: function() {
            return this._getPart("container") ;
        },

        _getPart: function(partName) {
            return this._node.querySelector("[part=" + partName + "]") ;
        },

        _render: function(node) {
            var bookLendDialog = this.$skin.cloneNode(true) ;
            node.appendChild(bookLendDialog) ;
        }
    }
}) ;