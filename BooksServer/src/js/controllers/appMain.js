getApp().
    config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'partials/main.html',
            controller: 'myCtrlr'
        }).
        otherwise({
            redirectTo: '/'
        })
    }]);

getApp().controller('myCtrlr', function($scope) {
    $scope.myName = "Nir M." ;
}) ;


getApp().controller('headerController', ['$scope', function($scope) {
    $scope.data = "Header Menu Items" ;
}]) ;