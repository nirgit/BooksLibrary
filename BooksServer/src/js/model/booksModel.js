getApp().factory('booksFactory', function() {
    var books = [
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
    factory.getBooks = function getBooks() {
        return books ;
    } ;

    return factory ;
}) ;
