define.Class("views.LoginBarView", function(def) {

    def.extends = "views.BaseView" ;

    def.statics = {
        fields: [
            ['STYLES', {
                        'LOGOUT_LINK': ".some-css-for-logout {}"
                     }
            ],
            ["$skin", null],
            ['PARTS', {
                        'LOGIN_BUTTON'    : "loginButton",
                        'LOGOUT_BUTTON'   : "logoutButton",
            }]
        ],
        methods: {
            $init: function() {
                this._createLoginBarStyle() ;
                this.$skin = this._createSkin() ;
            },

            _createLoginBarStyle: function() {
                var style = new Element("style") ;
                for(var s in this.STYLES) {
                    style.innerHTML += this.STYLES[s] ;
                }
                document.head.appendChild(style) ;
            },

            _createSkin: function() {
                var container       = new Element("div") ;
                container.className ='login-bar-container' ;
                container.setAttribute("part", "container") ;
                // TODO NMO 2/14/14 4:33 PM - SEPARATE CLIENT ID from skin !!! AND separate the captions
                var skinBody        = '<span id="signinButton" part="loginButton">' +
                                        '<span' +
                                           'class="g-signin"' +
                                           'data-callback="signInCB"' +
                                           'data-clientid="941749687344-4okcp9qcufe6gsiucekm7qqfmfljk545.apps.googleusercontent.com"' +
                                           'data-cookiepolicy="single_host_origin"' +
                                           'data-requestvisibleactions="http://schemas.google.com/AddActivity"' +
                                           'data-scope="https://www.googleapis.com/auth/plus.login">' +
                                        '</span>' +
                                     '</span>' +

                                     '<a id="logoutButton" part="logoutButton" href="#" class="hidden">Logout</a>' ;
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

        getCancel: function() {
            return this._getPart(this.PARTS.LOGIN_BUTTON) ;
        },

        getContainer: function() {
            return this._getPart(this.PARTS.LOGOUT_BUTTON) ;
        },

        _render: function(node) {
            var skinInstance = this.$skin.cloneNode(true) ;
            node.appendChild(skinInstance) ;
        }
    }
}) ;