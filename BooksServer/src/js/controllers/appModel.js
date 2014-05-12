getApp().controller('appModelController', ['$scope', function ($scope) {
    $scope.appPages = [
        {'name': 'Library',     'link': '#/'},
        {'name': 'Profile',     'link': '#/profile'},
        {'name': 'Settings',    'link': '#/settings'}
    ] ;
}]);