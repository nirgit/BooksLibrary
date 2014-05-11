getApp().
    config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'partials/main.html',
            controller: 'mainController'
        }).
        otherwise({
            redirectTo: '/'
        })
    }]);