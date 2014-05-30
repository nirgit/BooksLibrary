getApp().factory('booksFactory', ['$http', function($http) {
    var books = null ;
    var books2 = [
        {'name': 'Alice in Wonderland',         'author': 'Louis Carol',    'year': '1886'},
        {'name': 'Alice in Wonderland',         'author': 'Louis Carol',    'year': '1886'},
        {'name': 'Alice in Wonderland',         'author': 'Louis Carol',    'year': '1886'},
        {'name': 'Alice in Wonderland',         'author': 'Louis Carol',    'year': '1886'},
        {'name': 'Alice in Wonderland',         'author': 'Louis Carol',    'year': '1886'},
        {'name': 'Alice in Wonderland',         'author': 'Louis Carol',    'year': '1886'},
        {'name': 'Alice in Wonderland',         'author': 'Louis Carol',    'year': '1886'},
        {'name': 'Alice in Wonderland',         'author': 'Louis Carol',    'year': '1886'},
        {'name': 'Alice in Wonderland',         'author': 'Louis Carol',    'year': '1886'},
        {'name': 'Alice in Wonderland',         'author': 'Louis Carol',    'year': '1886'},
        {'name': 'Alice in Wonderland',         'author': 'Louis Carol',    'year': '1886'},
        {'name': 'Alice in Wonderland',         'author': 'Louis Carol',    'year': '1886'},
        {'name': 'Alice in Wonderland',         'author': 'Louis Carol',    'year': '1886'},
        {'name': 'Alice in Wonderland',         'author': 'Louis Carol',    'year': '1886'},
        {'name': 'Man\'s search for Meaning',   'author': 'Harold Fein',    'year': '2004'},
        {'name': 'Man\'s search for Meaning',   'author': 'Harold Fein',    'year': '2004'},
        {'name': 'Man\'s search for Meaning',   'author': 'Harold Fein',    'year': '2004'},
        {'name': 'Man\'s search for Meaning',   'author': 'Harold Fein',    'year': '2004'},
        {'name': 'Man\'s search for Meaning',   'author': 'Harold Fein',    'year': '2004'},
        {'name': 'Man\'s search for Meaning',   'author': 'Harold Fein',    'year': '2004'},
        {'name': 'Man\'s search for Meaning',   'author': 'Harold Fein',    'year': '2004'},
        {'name': 'Man\'s search for Meaning',   'author': 'Harold Fein',    'year': '2004'},
        {'name': 'Man\'s search for Meaning',   'author': 'Harold Fein',    'year': '2004'},
        {'name': 'Man\'s search for Meaning',   'author': 'Harold Fein',    'year': '2004'},
        {'name': 'Man\'s search for Meaning',   'author': 'Harold Fein',    'year': '2004'},
        {'name': 'Man\'s search for Meaning',   'author': 'Harold Fein',    'year': '2004'},
        {'name': 'Man\'s search for Meaning',   'author': 'Harold Fein',    'year': '2004'},
        {'name': 'Man\'s search for Meaning',   'author': 'Harold Fein',    'year': '2004'},
        {'name': 'Man\'s search for Meaning',   'author': 'Harold Fein',    'year': '2004'},
        {'name': 'Man\'s search for Meaning',   'author': 'Harold Fein',    'year': '2004'},
        {'name': 'Man\'s search for Meaning',   'author': 'Harold Fein',    'year': '2004'},
        {'name': 'Man\'s search for Meaning',   'author': 'Harold Fein',    'year': '2004'},
        {'name': 'Javascript - The good parts', 'author': 'Oreilly',        'year': '2008'}
    ] ;

    var factory = {} ;
    factory.getBooks = function getBooks(callback) {
        if(books !== null) {
            return callback(books) ;
        } else {
            return $http.get("../api/book/getAllBooks").
            then(function(response) {
                books = response.data ;
                callback(books) ;
            }) ;
        }
    } ;

    return factory ;
}]) ;
