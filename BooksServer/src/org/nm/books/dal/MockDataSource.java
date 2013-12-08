package org.nm.books.dal;

import org.nm.books.model.Book;
import org.nm.books.model.BookId;
import org.nm.books.model.Person;
import org.nm.books.model.PersonId;

import java.util.ArrayList;
import java.util.List;

/**
 * User: Nir Moav
 * Date: 12/4/13
 * Time: 11:31 PM
 * Description:
 */
public class MockDataSource {

    private static String[] bookNames = {
            "Javascript the good parts", "Effective Java", "Camera"
    } ;

    private static List<Book> bookList = null ;

    static {
        List<Book> books = new ArrayList<Book>() ;
        int id = 1 ;
        for(String bookName : bookNames) {
            books.add(new Book(new BookId(""+id), bookName, "Nir", 2013, new Person(new PersonId(id*33-7), "name"+id, "email"))) ;
        }
        MockDataSource.bookList = books ;
    }

    public static List<Book> getAllBooks() {
        return bookList ;
    }

}
