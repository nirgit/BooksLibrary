// Entry point of the app
function init() {
    var mainNode        = document.getElementById("content") ;
    var dialogsNode     = document.getElementById("dialogs") ;

    var eventBus        = new utils.EventBus() ;
    var lendDialog      = new controllers.BookLendController(new views.BookLendView(dialogsNode), eventBus) ;
    var booksView       = new views.BooksListView(mainNode) ;
    var booksController = new controllers.BooksListController(booksView, eventBus) ;
    booksController.showBooksList() ;
} ;

window.document.addEventListener("APP_READY", init.bind(window), false) ;