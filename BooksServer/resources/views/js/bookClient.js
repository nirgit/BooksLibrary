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