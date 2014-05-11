getApp().controller('appModelController', ['$scope', function ($scope) {
    $scope.appPages = [
        {'name': 'Library',     'link': '#/books'},
        {'name': 'Profile',     'link': '#/profile'},
        {'name': 'Settings',    'link': '#/settings'}
    ] ;
}]);