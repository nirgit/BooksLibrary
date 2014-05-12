getApp().controller('headerController', ['$scope', 'pagesFactory', function ($scope, pagesFactory) {
    $scope.appPages = pagesFactory.getPages() ;
}]);

