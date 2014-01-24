// Entry point of the app
function init() {
    var eventBus = new utils.EventBus() ;
    var mainNode = document.getElementById("main") ;
    var booksView = new views.BooksListView(mainNode) ;
    var booksController = new controllers.BooksListController(booksView, eventBus) ;
    booksController.showBooksList() ;
} ;

window.document.addEventListener("APP_READY", init.bind(window), false) ;