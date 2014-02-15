// Entry point of the app
function init() {
    var eventBus        = new utils.EventBus() ;
    var authentication  = new auth.Authentication(eventBus) ;

    eventBus.fireEvent("DOM_FINISHED_LOADING", null) ;

    window.app          = window.app || {} ;
    window.app['auth']  = window.app['auth'] || authentication ;

    var mainHook    = document.getElementById("main") ;
    var appView     = new views.AppView(mainHook) ;
    var appCtrlr    = new controllers.AppController(eventBus, appView) ;
    appCtrlr.go() ;
} ;

window.document.addEventListener("APP_READY", init.bind(window), false) ;