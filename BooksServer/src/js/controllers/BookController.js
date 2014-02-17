define.Class("controllers.BookController", function(def) {

    def.methods = {
        __init: function(bookView, bookModel, eventBus) {
            this._view      = bookView ;
            this._bookModel = bookModel ;
            this._eventBus  = eventBus ;
            this._BOOK_HOVER_STYLE = new RegExp("\.(.*) {").exec(bookView.STYLES.BOOK_HOVER)[1] ;
            this._isBookHovered = false ;
            // Build View
            this._bindBookModelToView() ;
            this._bindEvents() ;
        },

        _bindEvents: function() {
            this._eventBus.addListener("BOOKS_FILTER", this, this._filterHandler) ;

            $(this._view.getContainer()).on("click", function() {
                this._eventBus.fireEvent("SHOW_LEND_DIALOG", {data: this._bookModel}) ;
            }.bind(this)) ;

            $(this._view.getContainer()).on("mouseover", function() {
                if(!this._isBookHovered) {
                    this._bookHovered(true) ;
                    this._isBookHovered = true ;
                }
            }.bind(this)) ;

            $(this._view.asElement()).on("mouseout", function() {
                if(this._isBookHovered) {
                    this._bookHovered(false) ;
                    this._isBookHovered = false ;
                }
            }.bind(this)) ;
        },

        _filterHandler: function(eventName, data) {
            var bookName = this._bookModel.name.toLowerCase() ;
            if(bookName.indexOf(data.filter.toLowerCase()) >= 0) {
                this._view.asElement().style.display = "block" ;
            } else {
                this._view.asElement().style.display = "none" ;
            }
        },

        _bindBookModelToView: function() {
            this._view.getTitle().innerHTML = this._bookModel.name ;
            this._view.getAuthor().innerHTML = this._bookModel.author ;
            this._view.getYear().innerHTML = this._bookModel.year ;
            this._view.getOwner().innerHTML = this._bookModel.owner.name + " - " + this._bookModel.owner.email ;
        },

        _bookHovered: function(isHovered) {
            var currentClasses = this._view.getContainer().className ;
            var result ;
            if(isHovered) {
                result = currentClasses + " " + this._BOOK_HOVER_STYLE ;
            } else {
                var classes = currentClasses.split(" ") ;
                for(var i=0 ; i < classes.length; i++) {
                    if(classes[i] === this._BOOK_HOVER_STYLE) {
                        classes[i] = "" ;
                        break ;
                    }
                }
                result = classes.join(" ") ;
            }
            this._view.getContainer().className = result ;
        }
    }
}) ;