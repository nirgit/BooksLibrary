package org.nm.books.dal.mock;

import org.nm.books.model.Book;
import org.nm.books.model.BookId;
import org.nm.books.model.Owner;
import org.nm.books.model.PersonId;
import java.util.*;

/**
 * User: Nir Moav
 * Date: 12/4/13
 * Time: 11:31 PM
 * Description:
 */
public class MockDataSource {

    private static String[] firstNames = {
            "Nir", "Joshua", "Jerry", "Pamela", "Dana", "Karen", "Amy", "Sasha", "Ben", "William", "Alex",
            "Ali", "Andreas", "Nadia", "Carol", "Stewart", "Carl", "Chloe", "Connor", "Julia", "Sara",
            "Michael", "Tammy", "Susan", "George", "Frank", "Estel", "Helen", "Henry", "Kimberly", "John",
            "Martin", "Miguel", "Jonathan", "Alexandria"
    } ;

    private static String[] lastNames = {
            "Moav", "Bloch", "Kamil", "Rosenbaum", "Brown", "Smith", "Johnson", "Eliot",
            "Shakespear", "Walters", "Friedman", "Simpson", "Bradley", "Ramirez", "Baron",
            "Fox", "Fisher", "Bakers", "McDouglas", "Atkins", "Robertson", "Robinson",
            "Gold", "Ryder", "Pitt", "Peterson", "Anderson", "Steinbeck", "Amis", "Cervantes",
            "Sacks", "Blase"
    } ;

    private static String[] bookNames = {
            "Javascript the good parts", "Effective Java", "Camera", "Guns, Germs & Steel",
            "Steve Jobs", "Life of Pi", "Lord Of The Rings I", "Othelo", "The Swiss Kitchen",
            "The Hobbit", "Tom Sawyer", "Alice in Wonderland", "Dr. Doolittle", "Wilhelm Tell",
            "Foundations", "Euclide Geometry", "Advanced Calculus", "jQuery 2.0",
            "Harry Potter", "The Hunger Games", "To Kill A Mockingbird", "Gone with the Wind",
            "Little Women", "Animal Farm", "Romeo and Juliet", "Lord of the Flies",
            "The Grapes of Wrath", "Lolita", "The Information", "Don Quixote",
            "Alice in Wonderland", "The search for meaning", "The truth", "The Bible",
            "The History of Europe", "Collapse", "The Clash of Civilizations", "1984",
            "The Book Thief", "The Messenger", "The Prisoner from Tehran", "Letters to a Buddhist Jew",
            "Future Tense"
    } ;

    private List<String> authors = null ;
    private List<Book> bookList = null ;
    private List<Owner> owners = null ;

    final int NUMBER_OF_AUTHORS = firstNames.length ;
    final int NUMBER_OF_OWNERS  = 100 ;

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
        int currentYear = Calendar.getInstance().get(Calendar.YEAR) ;
        final int firstPublishingYear = 1880 ;
        Random r = new Random(System.currentTimeMillis()) ;
        Owner lastOwner = null ;
        Owner randomOwner ;
        for(String bookName : bookNames) {
            do {
                randomOwner   = owners.get(r.nextInt(owners.size()));
            } while(randomOwner.equals(lastOwner)) ;
            String authorName   = authors.get(r.nextInt(authors.size())) ;
            int year            = firstPublishingYear + r.nextInt(currentYear-firstPublishingYear);
            this.bookList.add(new Book(new BookId(r.nextInt()+"-BID"), bookName, authorName, year, randomOwner)) ;
            lastOwner = randomOwner ;
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
                Owner owner = new Owner(new PersonId(r.nextLong()), name, email) ;
                owners.add(owner) ;
            }
        }
    }

    public List<Book> getAllBooks() {
        return bookList ;
    }

    public List<Owner> getAllBookOwners() {
        return owners ;
    }

}
