getApp().
    config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'partials/pages/books.html',
            controller: 'booksController'
        })
        .when('/profile', {
          templateUrl: 'partials/pages/profile.html'
        })
        .when('/settings', {
          templateUrl: 'partials/pages/settings.html'
        })
        .otherwise({
            redirectTo: '/'
        })
    }]);