
cd %TOMCAT_HOME%\webapps
IF EXIST "%TOMCAT_HOME%\webapps\BooksServer-1.0.war" (del "%TOMCAT_HOME%\webapps\BooksServer-1.0.war")

IF EXIST "%TOMCAT_HOME%\webapps\BooksServer-1.0" (
    rmdir /Q /S "%TOMCAT_HOME%\webapps\BooksServer-1.0"
)