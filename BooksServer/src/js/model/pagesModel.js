getApp().factory('pagesFactory', function() {
    var appPages = [
       {'name': 'Library',     'link': '#/'},
       {'name': 'Profile',     'link': '#/profile'},
       {'name': 'Settings',    'link': '#/settings'}
   ] ;

    var factory = {} ;
    factory.getPages = function getPages() {
        return appPages ;
    } ;

    return factory ;
}) ;
