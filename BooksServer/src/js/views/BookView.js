define.Class("views.BookView", function(def) {

    def.extends = "views.BaseView" ;

    def.methods = {
        __init: function(node, args) {
            this.super(node, args) ;
            this.CLASS_STYLE_NAME = "book" ;
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
            var style = new Element("style") ;
            style.innerHTML = "." + this.CLASS_STYLE_NAME + "{" +
            "border: 1px silver solid;" +
            "padding: 5px;" +
            "margin: 2px;" +
            "float: left;" +
            "width: 350px;" +
            + "}" ;

            document.head.appendChild(style) ;
        },

        _render: function(node) {
            var bookContainer       = new Element("div") ;
            bookContainer.className = this.CLASS_STYLE_NAME ;
            this._title             = new Element("div") ;
            this._title.innerHTML   = "Book Title" ;
            this._author            = new Element("div") ;
            this._author.innerHTML  = "Book Author" ;
            this._year              = new Element("div") ;
            this._year.innerHTML    = "Book Year" ;
            this._owner             = new Element("div") ;
            this._owner.innerHTML   = "Book Owner" ;

            bookContainer.appendChild(this._title) ;
            bookContainer.appendChild(this._author) ;
            bookContainer.appendChild(this._year) ;
            bookContainer.appendChild(this._owner) ;

            node.appendChild(bookContainer) ;
        }
    }
}) ;