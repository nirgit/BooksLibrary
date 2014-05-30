getApp().controller('booksController', ['$scope', 'booksFactory', function ($scope, booksFactory) {
    $scope.books = [] ;
    booksFactory.getBooks(function(booksData) {
        $scope.books = booksData ;
    }) ;

    $scope.addBook = function() {
        var bookToInsert = $scope.newBook ;
        booksFactory.getBooks().push(bookToInsert) ;
        $scope.newBook = {} ;
    }
}]) ;