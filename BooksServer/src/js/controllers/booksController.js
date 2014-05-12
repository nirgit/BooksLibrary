getApp().controller('booksController', ['$scope', function ($scope) {
    $scope.books = [
        {'name': 'Alice in Wonderland',         'author': 'Louis Carol',    'year': '1886'},
        {'name': 'Man\'s search for Meaning',   'author': 'Harold Fein',    'year': '2004'},
        {'name': 'Javascript - The good parts', 'author': 'Oreilly',        'year': '2008'}
    ] ;

    $scope.addBook = function() {
        var bookToInsert = $scope.newBook ;
        $scope.books.push(bookToInsert) ;
        $scope.newBook = {} ;
    }
}]) ;