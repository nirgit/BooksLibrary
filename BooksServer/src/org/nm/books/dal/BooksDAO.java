package org.nm.books.dal;

import com.google.common.base.Function;
import com.google.common.collect.Lists;
import org.nm.books.dal.repository.BooksRepository;
import org.nm.books.model.*;
import org.nm.books.model.dal.IBooksDAO;
import org.nm.books.model.dal.IPersonDAO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * User: Nir Moav
 * Date: 11/26/13
 * Time: 12:43 PM
 * Description: a DAO for books.
 */
@Component("booksDao")
public class BooksDAO implements IBooksDAO {

    private final static Logger LOG = LoggerFactory.getLogger(BooksDAO.class) ;

    private ArrayList<BookLend> lentBooks ;

    @Autowired
    BooksRepository booksRepository ;

    @Autowired
    private IPersonDAO peopleDAO ;

    /**
     * C'tor
     */
    public BooksDAO() {
        this.lentBooks  = new ArrayList<>() ;
    }

    @PostConstruct
    public void init() {
        peopleDAO.addPerson(new Person(new PersonId(123), "Nir Moav", "getnirm@gmail.com"));
        this.addBooks(MockDataSource.getAllBooks()) ;
    }

    @Override
    public List<Book> getAllBooks() {
        LOG.info("Getting a list of all the books in the library.") ;
        Iterable<Book> allBooks = this.booksRepository.findAll();
        ArrayList<Book> booksList = new ArrayList<>() ;
        for(Book b : allBooks) {
            booksList.add(b) ;
        }
        LOG.info(booksList.size() + " books are in the library.") ;
        return Collections.unmodifiableList(booksList) ;
    }

    @Override
    public List<Book> getAllAvailableBooks() {
        List<Book> availableBooks = this.getAllBooks() ;
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

    private void addBooks(List<Book> books) {
        if(books != null) {
            for(Book bookToAdd : books) {
                this.addBook(bookToAdd);
            }
        }
    }

    @Override
    public void addBook(Book book) {
        if(book != null) {
            LOG.info("Saving Book to DB:\t" + book) ;
            this.booksRepository.save(book) ;
        }
    }

    /**
     * @param bookId an ID of the book to remove from the inventory.
     */
    @Override
    public void removeBook(BookId bookId) {
        if(bookId != null && !this.isBookLent(bookId)) {
            Book bookToRemove = this.getBookById(bookId) ;
            this.booksRepository.delete(bookToRemove);
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
        LOG.info("looking for book, matching ID:\t" + bookId);
        Book result = this.booksRepository.findOne(bookId);
        LOG.info("Book matching ID:\t" + bookId + "\t, is:\t" + result);
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
