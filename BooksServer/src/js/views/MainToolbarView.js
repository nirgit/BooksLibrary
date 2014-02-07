define.Class("views.MainToolbarView", function(def) {

    def.extends = "views.BaseView" ;

    def.statics = {
        fields: [
            ["STYLES", {

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
                                    "<div part='availableBooks' class='button'>Books</div>" +
                                    "<div part='myBooks' class='button'>Lends</div>" +
                                    "<div part='profile' class='button'>Profile</div>" ;
                container.innerHTML = skinBody ;
                return container ;
            }
        }
    } ;

    def.methods = {
        __init: function(node, args) {
            this.super(node, args) ;
            this._toolbarSkin = this.$skin.cloneNode(true) ;
            this.go() ;
        },

        // MUST be overriden in sub-classes.
        _render: function(view) {
            view.appendChild(this._toolbarSkin) ;
        }
    } ;
}) ;