getApp().
    config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'partials/books.html',
            controller: 'booksController'
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