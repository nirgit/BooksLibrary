getApp().
    config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'partials/books.html'
        })
        .when('/profile', {
          templateUrl: 'partials/profile.html'
        })
        .when('/settings', {
          templateUrl: 'partials/settings.html'
        })
        .otherwise({
            redirectTo: '/'
        })
    }]);