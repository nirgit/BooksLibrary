define.Class("views.BookView", function(def) {

    def.extends = "views.BaseView" ;

    def.statics = {
        CLASS_STYLE_NAME: "book",
        CLASS_TITLE_SUB_STYLE_NAME: "title",
        CLASS_AUTHOR_SUB_STYLE_NAME: "author",
        CLASS_YEAR_SUB_STYLE_NAME: "year",
        CLASS_OWNER_SUB_STYLE_NAME: "owner"
    } ;

    def.methods = {
        __init: function(node, args) {
            this.super(node, args) ;
            this._createBookStyle() ;
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

        _createBookStyle: function() {
            if(window._$bookStyleReady) {return} ;
            var style = new Element("style") ;
            style.innerHTML += "." + this.CLASS_STYLE_NAME +
            "{" +
                "background: url(imgs/book.jpg) 214px 266px;" +
                "color: white;" +
                "float: left;" +
                "font-family: sans-serif; font-size: 20px;" +
                "height: 250px; width: 190px;" +
                "margin: 10px;" +
                "text-align: center; word-wrap: break-word;" +
            "}" ;

            style.innerHTML += "." + utils.createClassStyle(this.CLASS_STYLE_NAME, this.CLASS_TITLE_SUB_STYLE_NAME) +
                "{" +
                    "color: cadetblue;" +
                    "font-family: sans-serif; font-size: 22px; font-weight: lighter;" +
                    "margin: 5px;" +
                    "text-align: center; word-wrap: break-word;" +
                "}" ;

            document.head.appendChild(style) ;
            window._$bookStyleReady = true ;
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