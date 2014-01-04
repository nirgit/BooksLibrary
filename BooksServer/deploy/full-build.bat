call cd E:\projects\Projects\Java\BooksLibrary\BooksServer\deploy
call cleanup.bat
call cd E:\projects\Projects\Java\BooksLibrary\BooksServer
call gradle clean execGrunt build
call cd E:\projects\Projects\Java\BooksLibrary\BooksServer\deploy
call deploy.bat
