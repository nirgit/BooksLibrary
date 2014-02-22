define.Class("views.MainToolbarView", function(def) {

    def.extends = "views.BaseView" ;

    def.statics = {
        fields: [
            ["STYLES", {
                "TOOLBAR_BUTTON": ".toolbar-button {float: left; text-align: center; font-weight: bold; margin-right: 2px}",
                "SELECTED_ITEM": ".toolbar-selected-item {background-color: blueviolet; color: white}"
            }]
        ],

        methods: {
            $init: function() {
                this._initStyle() ;
                this.$skin = this._createSkin() ;
            },

            _initStyle: function() {
                var style = new Element("style") ;
                for(var s in this.STYLES) {
                    style.innerHTML += this.STYLES[s] ;
                }
                document.head.appendChild(style) ;
            },

            _createSkin: function() {
                var container       = new Element("div") ;
                container.className = 'main-toolbar' ;
                container.setAttribute("part", "container") ;
                var skinBody        = "" +
                                    "<div part='availableBooks' class='button toolbar-button'>Books</div>" +
                                    "<div part='myBooks' class='button toolbar-button'>Lends</div>" +
                                    "<div part='profile' class='button toolbar-button'>Profile</div>" ;
                container.innerHTML = skinBody ;
                return container ;
            }
        }
    } ;

    def.methods = {
        __init: function(node, args) {
            this.super(node, args) ;
            this._toolbarSkin = this.$skin.cloneNode(true) ;
        },

        // MUST be overriden in sub-classes.
        _render: function(view) {
            view.appendChild(this._toolbarSkin) ;
        }
    } ;
}) ;