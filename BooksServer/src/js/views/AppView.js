define.Class("views.AppView", function(def) {

    def.extends = "views.BaseView" ;

    def.statics = {
        fields: [
            ["$skin", null]
        ],

        methods: {
            $init: function() {
                this.$skin = this._createSkin() ;
            },

            _createSkin: function() {
                var container = new Element("div") ;
                var content = '' +
                    '<div part="mainToolbar">' +
                        '<div part="login"></div>' +
                    '</div>' +

                    '<div part="content"></div>' +

                    '<div part="dialogs" class="hidden">' +
                        '<div class="veil"></div>' ;
                    '</div>' +
                    '' ;
                 container.innerHTML = content ;
                 return container ;
            }
        }
    } ;

    def.methods = {
        __init: function(node, args) {
            this.super(node, args) ;
            this._skinInstance  = this.$skin.cloneNode(true) ;
            this._views = {
                MAIN_TOOLBAR:   new views.MainToolbarView(),
                LOGIN_BAR:      new views.LoginBarView(),
                BOOKS_VIEW:     new views.BooksListView(),
                LEND_DIALOG:    new views.dialogs.BookLendView()
            } ;
        },

        getMainToolbarView: function() {
            return this._views.MAIN_TOOLBAR ;
        },

        getLoginBarView: function() {
            return this._views.LOGIN_BAR ;
        },

        getBooksView: function() {
            return this._views.BOOKS_VIEW ;
        },

        getDialogView: function() {
            return this._views.LEND_DIALOG ;
        },

        _render: function(view, args) {
            view.appendChild(this._skinInstance) ;
            this._renderViewOnPart('mainToolbar', this._views.MAIN_TOOLBAR) ;
            this._renderViewOnPart('login', this._views.LOGIN_BAR) ;
            this._renderViewOnPart('content', this._views.BOOKS_VIEW) ;
            this._renderViewOnPart('dialogs', this._views.LEND_DIALOG) ;
        },

        _renderViewOnPart: function(partName, view) {
            var partInDom = this._getPart(partName) ;
            view.go(partInDom) ;
        }
    } ;
}) ;