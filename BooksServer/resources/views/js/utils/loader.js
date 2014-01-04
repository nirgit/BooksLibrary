window.loadScript = (function () {

    var baseUrl = "js/" ;

    var load = function (url, cb) {
        if(!url) {
            return ;
        } else {
            var sTag = document.createElement("script") ;
            sTag.src = baseUrl + url ;
            document.body.appendChild(sTag) ;
            if(cb) {
                cb() ;
            }
        }
    }

    return load ;
})() ;

window.loadScripts = function(scripts, cb) {

    var loader = function() {
        if(scripts && scripts.length > 0) {
            var nextScript = scripts.pop() ;
            loadScript(nextScript, loader) ;
        } else {
            cb() ;
        }
    }

    if(!scripts) {
        return ;
    } else {
        loader() ;
    }
}