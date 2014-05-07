getApp().directive('libraryheader', function() {
        return {
            restrict: 'E',
            templateUrl: 'partials/booksHeader.html'
        }
    }) ;

getApp().directive('librarymenu', function() {
    return {
        restrict: 'E',
        templateUrl: 'partials/library-menu.html',
        scope: {
            menuitems: '=',
        }
    } ;
}) ;