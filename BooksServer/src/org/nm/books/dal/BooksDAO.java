package org.nm.books.dal;

import com.google.common.base.Function;
import com.google.common.collect.Lists;
import org.nm.books.model.Book;
import org.nm.books.model.BookId;
import org.nm.books.model.BookLend;
import org.nm.books.model.dal.IBooksDAO;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

/**
 * User: Nir Moav
 * Date: 11/26/13
 * Time: 12:43 PM
 * Description: a DAO for books.
 */
@Component("booksDao")
public class BooksDAO implements IBooksDAO {

    // TODO NMO 11/26/13 - this is just a mock list of books to be used until connection to DB is made.
    private final List<Book> books ;

    private final ArrayList<BookLend> lentBooks ;

    /**
     * C'tor
     */
    public BooksDAO() {
        this.books      = MockDataSource.getAllBooks() ;
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
            public Book apply(BookLend bookLend) {
                return BooksDAO.this.getBookById(bookLend.getBookId()) ;
            }
        }) ;

        availableBooks.removeAll(booksThatAreTaken) ;
        return availableBooks;
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
            Book bookToRemove = this.getBookById(bookId) ;
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

    public Book getBookById(BookId bookId) {
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

    /**
     * @see org.nm.books.model.dal.IBooksDAO#getLentBooks()
     */
    @Override
    public List<BookLend> getLentBooks() {
        return this.lentBooks ;
    }
}
