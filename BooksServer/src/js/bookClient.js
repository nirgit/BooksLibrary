function getBook(bookName){
    if(bookName) {
        $.get("../api/book/" + bookName, function(bookData) {
            $("#results").text(JSON.stringify(bookData)) ;
        }) ;
    } else {
        $("#results").text(bookName + " - Book is not found!") ;
    }
}

// Entry point of the app
function init() {
    var mainNode = document.getElementById("main") ;
    var booksView = new views.BooksListView(mainNode) ;
    var booksController = new controllers.BooksListController(booksView) ;
    booksController.showBooksList() ;
}

function oldInit() {
    getAllBooks() ;

    $("#searchButton").on('click', function() {
        var bookName = $("#bookNameToSearch").val() ;
        getBook(bookName) ;
    }) ;
}
