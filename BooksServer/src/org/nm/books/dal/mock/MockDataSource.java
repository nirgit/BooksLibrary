package org.nm.books.dal.mock;

import org.nm.books.model.Book;
import org.nm.books.model.BookId;
import org.nm.books.model.Person;
import org.nm.books.model.PersonId;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

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

    private List<Book> bookList = null ;
    private List<Person> owners = null ;

    public MockDataSource() {
        this.bookList   = new ArrayList<>() ;
        this.owners     = new ArrayList<>() ;

        createOwners() ;
        createBooks() ;
    }

    private void createBooks() {
        Random r = new Random(System.currentTimeMillis()) ;
        int id = 1 ;
        for(String bookName : bookNames) {
            Person randomOwner = owners.get(r.nextInt(owners.size()));
            this.bookList.add(new Book(new BookId("" + id), bookName, "Joshua Bloch", 2013, randomOwner)) ;
        }
    }

    private void createOwners() {
        Person p = new Person(new PersonId(System.currentTimeMillis()), "Nir Moav", "getnirm@gmail.com") ;
        owners.add(p) ;
    }

    public List<Book> getAllBooks() {
        return bookList ;
    }

    public List<Person> getAllBookOwners() {
        return owners ;
    }

}
