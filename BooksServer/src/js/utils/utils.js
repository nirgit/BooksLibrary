(function() {

    window.utils = window.utils || {} ;

    var utils = window.utils ;

    utils.defer = function(f) {
        return function() {
            return setTimeout(function() {
                f() ;
            }, 1) ;
        }
    } ;

    utils.createClassStyle = function(className, subClassName) {
        var name = null ;
        if(className) {
            name = className ;
            if(subClassName) {
                name += "-" + subClassName ;
            }
        }
        return name ;
    } ;
})() ;