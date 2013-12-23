package org.nm.books.dal.mock;

import org.nm.books.model.Book;
import org.nm.books.model.BookId;
import org.nm.books.model.Person;
import org.nm.books.model.PersonId;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.UUID;

/**
 * User: Nir Moav
 * Date: 12/4/13
 * Time: 11:31 PM
 * Description:
 */
public class MockDataSource {

    private static String[] firstNames = {"Nir", "Joshua", "George", "Jerry", "Dana", "Karen", "Amy", "Sasha", "Ben", "William"} ;
    private static String[] lastNames = {"Moav", "Bloch", "Kamil", "Rosenbaum", "Brown", "Smith", "Johnson", "Eliot", "Shakespear"} ;

    private static String[] bookNames = {
            "Javascript the good parts", "Effective Java", "Camera", "Guns, Germs & Steel",
            "Steve Jobs", "Life of Pi", "Lord Of The Rings I", "Othelo"
    } ;

    private List<String> authors = null ;
    private List<Book> bookList = null ;
    private List<Person> owners = null ;

    final int NUMBER_OF_AUTHORS = 10 ;
    final int NUMBER_OF_OWNERS  = 10 ;

    public MockDataSource() {
        this.authors    = new ArrayList<>() ;
        this.bookList   = new ArrayList<>() ;
        this.owners     = new ArrayList<>() ;

        createAuthors() ;
        createOwners() ;
        createBooks() ;
    }

    private void createAuthors() {
        Random r = new Random(System.currentTimeMillis()) ;
        for(int i=0; i < NUMBER_OF_AUTHORS; i++) {
            String firstName    = firstNames[r.nextInt(firstNames.length)] ;
            String lastName     = lastNames[r.nextInt(lastNames.length)] ;
            authors.add(firstName + " " + lastName) ;
        }
    }

    private void createBooks() {
        Random r = new Random(System.currentTimeMillis()) ;
        for(String bookName : bookNames) {
            Person randomOwner  = owners.get(r.nextInt(owners.size()));
            String authorName   = authors.get(r.nextInt(authors.size())) ;
            this.bookList.add(new Book(new BookId(UUID.randomUUID()+"-BID"), bookName, authorName, 2013, randomOwner)) ;
        }
    }

    private void createOwners() {
        Random r = new Random(System.currentTimeMillis()) ;
        while(owners.size() < NUMBER_OF_OWNERS) {
            String firstName    = firstNames[r.nextInt(firstNames.length)] ;
            String lastName     = lastNames[r.nextInt(lastNames.length)] ;
            String name = firstName + " " + lastName;
            if(!authors.contains(name)) {
                String email = firstName + "." + lastName + "@gmail.com";
                Person p = new Person(new PersonId(System.currentTimeMillis()), name, email) ;
                owners.add(p) ;
            }
        }
    }

    public List<Book> getAllBooks() {
        return bookList ;
    }

    public List<Person> getAllBookOwners() {
        return owners ;
    }

}
