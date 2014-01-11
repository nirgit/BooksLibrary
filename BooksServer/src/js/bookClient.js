function getBook(bookName){
    if(bookName) {
        $.get("../api/book/" + bookName, function(bookData) {
            $("#results").text(JSON.stringify(bookData)) ;
        }) ;
    } else {
        $("#results").text(bookName + " - Book is not found!") ;
    }
}

function getAllBooks() {
    $.get("../api/book/getAllBooks", function(booksData) {
        if(booksData) {
            for(var i=0; i < booksData.length; i++) {
                var li = document.createElement("li") ;
                var book = booksData[i] ;
                li.innerText = book.name + " / " + book.author + " (" + book.year + ")" ;
                $("#availableBooksList").append(li) ;
            }
        }
    }) ;
}

// Entry point of the app
function init() {
    var mainNode = document.getElementById("main") ;
    var booksView = new views.BooksView(mainNode) ;
    booksView.go() ;
}

function oldInit() {
    getAllBooks() ;

    $("#searchButton").on('click', function() {
        var bookName = $("#bookNameToSearch").val() ;
        getBook(bookName) ;
    }) ;
}
