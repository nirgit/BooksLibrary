package org.nm.books.logic;

import org.nm.books.model.Book;
import org.nm.books.model.BookId;
import org.nm.books.model.BookLend;
import org.nm.books.model.PersonId;
import org.nm.books.model.dal.IBooksDAO;
import org.nm.books.model.logic.IBooksLogic;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Collections;
import java.util.LinkedList;
import java.util.List;

/**
 * User: Nir Moav
 * Date: 11/26/13
 * Time: 10:03 PM
 * Description:
 */
@Component("booksLogic")
public class BooksLogic implements IBooksLogic {

    private final static Logger LOG = LoggerFactory.getLogger(BooksLogic.class) ;

    @Autowired
    private IBooksDAO dao ;

    /**
     * C'tor
     */
    public BooksLogic() {}

    /**
     * C'tor
     * @param dao the DAO
     */
    public BooksLogic(IBooksDAO dao) {
        this.dao = dao;
        LOG.info("Book logic has been initialized.");
    }

    @Override
    public List<Book> getAllBooks() {
        return dao.getAllBooks() ;
    }

    @Override
    public List<Book> getAllAvailableBooks() {
        return dao.getAllAvailableBooks() ;
    }

    @Override
    public List<Book> getAllBooksTakenByPerson(PersonId personId) {
        if(personId == null){
            return Collections.emptyList() ;
        }
        List<BookLend> lentBooks = this.dao.getLentBooks() ;
        List<Book> result = new LinkedList<Book>() ;

        for(BookLend bl : lentBooks) {
            if(bl.getPersonId().equals(personId)) {
                Book b = this.dao.getBookById(bl.getBookId()) ;
                result.add(b) ;
            }
        }
        return result;
    }

    @Override
    public void lendABook(BookLend bookToLend) {
        if(bookToLend != null) {
            this.dao.lendABook(bookToLend);
        } else {
            LOG.error("Book to lend cannot be NULL") ;
        }
    }

    @Override
    public void returnBook(BookLend bookToReturn) {
        if(bookToReturn != null) {
            this.dao.returnBook(bookToReturn);
        } else {
            LOG.error("Book to return cannot be NULL") ;
        }
    }

    /**
     * @see IBooksLogic#addBook(org.nm.books.model.Book)
     */
    @Override
    public void addBook(Book book) {
        if(book != null) {
            this.dao.addBook(book);
        } else {
            LOG.error("Book to ADD to the Library cannot be NULL") ;
        }
    }

    @Override
    public void removeBook(BookId book) {
        if(book != null) {
            this.dao.removeBook(book);
        } else {
            LOG.error("Book to REMOVE to the Library cannot be NULL") ;
        }
    }

    @Override
    public Book getBookByName(String name) {
        if(name == null) {
            LOG.error("Book name is NULL. returning NULL.");
            return null ;
        }
        List<Book> books = getAllBooks();
        Book result = null ;
        for(Book b : books) {
            if(b.getName().equals(name)) {
                result = b ;
                break ;
            }
        }
        if(result == null) {
            result = Book.EMPTY ;
        }
        return result ;
    }
}
