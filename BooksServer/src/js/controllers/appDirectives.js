getApp().directive('libraryheader', function() {
        return {
            restrict: 'E',
            templateUrl: 'partials/directives/booksHeader.html'
        }
    }) ;

getApp().directive('librarymenu', function() {
    return {
        restrict: 'E',
        templateUrl: 'partials/directives/library-menu.html',
        scope: {
            menuitems: '=',
        }
    } ;
}) ;