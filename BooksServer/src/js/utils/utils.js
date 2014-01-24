(function() {

    window.utils = window.utils || {} ;

    var utils = window.utils ;

    utils.defer = function defer(f) {
        return function() {
            return setTimeout(function() {
                f() ;
            }, 1) ;
        }
    } ;

    utils.createClassStyle = function createClassStyle(className, subClassName) {
        var name = null ;
        if(className) {
            name = className ;
            if(subClassName) {
                name += "-" + subClassName ;
            }
        }
        return name ;
    } ;

    utils.runOnce = function runOnce(func) {
        var hasExecuted = false ;
        return function() {
            if(!hasExecuted) {
                func() ;
            }
        }
    }
})() ;