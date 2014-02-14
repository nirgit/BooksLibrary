// Entry point of the app
function init() {
    var eventBus        = new utils.EventBus() ;
    var authentication  = new auth.Authentication(eventBus) ;

    eventBus.fireEvent("DOM_FINISHED_LOADING", null) ;

    window.app          = window.app || {} ;
    window.app['auth']  = window.app['auth'] || authentication ;

    var mainNode        = document.getElementById("content") ;
    var dialogsNode     = document.getElementById("dialogs") ;
    var toolbarNode     = document.getElementById("mainToolbar") ;
    var loginBarNode    = document.getElementById("login") ;

    var loginBar        = new views.LoginBarView(loginBarNode) ;
    var lendDialog      = new controllers.BookLendController(new views.BookLendView(dialogsNode), eventBus) ;
    var toolbar         = new views.MainToolbarView(toolbarNode) ;
    var booksView       = new views.BooksListView(mainNode) ;
    var booksController = new controllers.BooksListController(booksView, eventBus) ;
    booksController.showBooksList() ;
} ;

window.document.addEventListener("APP_READY", init.bind(window), false) ;