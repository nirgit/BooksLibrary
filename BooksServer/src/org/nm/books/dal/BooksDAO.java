package org.nm.books.dal;

import com.google.common.base.Function;
import com.google.common.collect.Lists;
import com.sun.istack.internal.Nullable;
import org.nm.books.model.Book;
import org.nm.books.model.BookId;
import org.nm.books.model.BookLend;
import org.nm.books.model.PersonId;
import org.nm.books.model.dal.IBooksDAO;

import java.util.ArrayList;
import java.util.Collections;
import java.util.LinkedList;
import java.util.List;

/**
 * User: Nir Moav
 * Date: 11/26/13
 * Time: 12:43 PM
 * Description: a DAO for books.
 */
public class BooksDAO implements IBooksDAO {

    // TODO NMO 11/26/13 - this is just a mock list of books to be used until connection to DB is made.
    private final List<Book> books ;

    private final ArrayList<BookLend> lentBooks ;

    /**
     * C'tor
     */
    public BooksDAO() {
        this.books      = new ArrayList<Book>() ;
        this.lentBooks  = new ArrayList<BookLend>() ;
    }

    /**
     * C'tor
     * @param books is a mock books list to init the inventory
     */
    public BooksDAO(List<Book> books) {
        this.books      = books;
        this.lentBooks  = new ArrayList<BookLend>() ;
    }

    @Override
    public List<Book> getAllBooks() {
        return this.books ;
    }

    @Override
    public List<Book> getAllAvailableBooks() {
        List<Book> availableBooks = new ArrayList<Book>(this.books) ;
        List<Book> booksThatAreTaken = Lists.transform(this.lentBooks, new Function<BookLend, Book>() {
            @Override
            public Book apply(@Nullable BookLend bookLend) {
                return BooksDAO.this.getBook(bookLend.getBookId()) ;
            }
        }) ;

        availableBooks.removeAll(booksThatAreTaken) ;
        return availableBooks;
    }

    @Override
    public List<Book> getAllBooksTakenByPerson(PersonId personId) {
        if(personId == null){
            return Collections.emptyList() ;
        }
        List<Book> result = new LinkedList<Book>() ;
        for(BookLend bl : this.lentBooks) {
            if(bl.getPersonId().equals(personId)) {
                Book b = this.getBook(bl.getBookId()) ;
                result.add(b) ;
            }
        }
        return result;
    }

    @Override
    public void lendABook(BookLend lend) {
        this.lentBooks.add(lend) ;
    }

    @Override
    public void returnBook(BookLend lend) {
        this.lentBooks.remove(lend) ;
    }


    @Override
    public void addBook(Book book) {
        if(book != null && !this.books.contains(book)) {
            this.books.add(book) ;
        }
    }

    /**
     * @param bookId an ID of the book to remove from the inventory.
     */
    @Override
    public void removeBook(BookId bookId) {
        if(bookId != null && !this.isBookLent(bookId)) {
            Book bookToRemove = this.getBook(bookId) ;
            this.books.remove(bookToRemove) ;
        }
    }

    /**
     * @param bookId a book ID.
     * @return true iff the book was lent by a Person.
     */
    private boolean isBookLent(BookId bookId) {
        if(bookId == null) {
            return false ;
        }
        for(BookLend bl : this.lentBooks) {
            if(bl.getBookId().equals(bookId)) {
                return true ;
            }
        }
        return false;
    }

    private Book getBook(BookId bookId) {
        Book result = null ;
        if(bookId != null) {
            for(Book b : this.books) {
                if(b.getId().equals(bookId)) {
                    result = b ;
                    break ;
                }
            }
        }
        return result ;
    }

}
