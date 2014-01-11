window.Element = (function() {
    function Element(elementName, styles) {
        var domElement = document.createElement(elementName) ;
        for(var styleName in styles) {
            domElement.style[styleName] = styles[styleName] ;
        }
        return domElement ;
    }

    return Element ;
})() ;