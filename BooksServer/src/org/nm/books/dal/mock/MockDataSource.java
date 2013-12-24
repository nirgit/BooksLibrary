package org.nm.books.dal.mock;

import org.nm.books.model.*;

import java.util.*;

/**
 * User: Nir Moav
 * Date: 12/4/13
 * Time: 11:31 PM
 * Description:
 */
public class MockDataSource {

    private static String[] firstNames =
            {"Nir", "Joshua", "George", "Jerry", "Dana", "Karen", "Amy", "Sasha", "Ben", "William",
             "Ali", "Andreas", "Nadia", "Carol", "Stewart", "Carl", "Chloe", "Connor", "Julia", "Sara"} ;

    private static String[] lastNames = {"Moav", "Bloch", "Kamil", "Rosenbaum", "Brown", "Smith", "Johnson", "Eliot",
                                        "Shakespear", "Walters", "Friedman", "Simpson", "Bradley", "Ramirez", "Baron"} ;

    private static String[] bookNames = {
            "Javascript the good parts", "Effective Java", "Camera", "Guns, Germs & Steel",
            "Steve Jobs", "Life of Pi", "Lord Of The Rings I", "Othelo", "The Swiss Kitchen",
            "The Hobbit", "Tom Sawyer", "Alice in Wonderland", "Dr. Doolittle", "Wilhelm Tell",
            "Foundations", "Euclide Geometry", "Advanced Calculus", "jQuery 2.0"
    } ;

    private List<String> authors = null ;
    private List<Book> bookList = null ;
    private List<Owner> owners = null ;

    final int NUMBER_OF_AUTHORS = firstNames.length ;
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
        int currentYear = Calendar.getInstance().get(Calendar.YEAR) ;
        final int firstPublishingYear = 1880 ;
        Random r = new Random(System.currentTimeMillis()) ;
        for(String bookName : bookNames) {
            Owner randomOwner   = owners.get(r.nextInt(owners.size()));
            String authorName   = authors.get(r.nextInt(authors.size())) ;
            int year            = firstPublishingYear + r.nextInt(currentYear-firstPublishingYear);
            this.bookList.add(new Book(new BookId(UUID.randomUUID()+"-BID"), bookName, authorName, year, randomOwner)) ;
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
                Owner owner = new Owner(new PersonId(System.currentTimeMillis()), name, email) ;
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
