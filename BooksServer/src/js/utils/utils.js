(function() {

    window.utils = window.utils || {} ;

    window.utils.defer = function(f) {
        return function() {
            return setTimeout(function() {
                f() ;
            }, 1) ;
        }
    } ;

})() ;