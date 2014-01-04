package org.nm.books.web;

import org.nm.books.model.Book;
import org.nm.books.model.BookId;
import org.nm.books.model.Owner;
import org.nm.books.model.api.IBooksAPI;
import org.nm.books.model.logic.IBooksLogic;
import org.nm.books.model.logic.IPersonLogic;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * User: Nir Moav
 * Date: 11/29/13
 * Time: 11:06 AM
 * Description:
 */
@Controller
public class BookController implements IBooksAPI {

    private final static Logger LOG = LoggerFactory.getLogger(BookController.class) ;

    @Autowired
    IBooksLogic booksLogic ;

    @Autowired
    IPersonLogic personLogic ;

    @RequestMapping(value = "/book/{name}", method=RequestMethod.GET)
    @ResponseBody
    public Book getBook(@PathVariable String name) {
        Book b = booksLogic.getBookByName(name) ;
        if(Book.EMPTY.equals(b) || b == null) {
            LOG.info("No book found matching the name:\t" + name) ;
            return null ;
        } else {
            LOG.info("The book that was found which was matching the name is:\t" + b.toString()) ;
            return b ;
        }
    }

    /**
     * @see IBooksAPI#addBook
     */
    @Override
    @RequestMapping(value = "/book/addBook/{bookName}/{author}/{year}/{ownerName}/{ownerEmail}", method = RequestMethod.POST)
    public void addBook(@PathVariable("bookName") String bookName, @PathVariable("author") String bookAuthor,
                        @PathVariable("year") int bookYear, @PathVariable("ownerName") String ownerName,
                        @PathVariable("ownerEmail") String ownerEmail) {
        Owner owner    = personLogic.getOwnerByEmail(ownerEmail);
        if(owner == null) {
            personLogic.addOwner(ownerName, ownerEmail);
            owner = personLogic.getOwnerByEmail(ownerEmail);
            if(owner == null) {
                LOG.error("Error while adding a book, person is NULL.") ;
                return ;
            }
        }
        BookId bookId   = new BookId(bookName+"-"+bookAuthor+"-"+bookYear+"-"+ownerName+"-ID");
        Book newBook    = new Book(bookId, bookName, bookAuthor, bookYear, owner);
        try{
            booksLogic.addBook(newBook);
        } catch(Exception e) {
            LOG.error("Error adding a book to the DB", e) ;
        }
    }

    /**
     * @see java.org.nm.books.model.api.IBooksAPI#deleteBook(BookId)
     */
    @Override
    @RequestMapping(value = "/book/deleteBook/{id}", method = RequestMethod.POST)
    public void deleteBook(@PathVariable("id") BookId bookIdToDelete) {
        // TODO NMO 12/24/13 -
        LOG.info("Deleting a book with ID:", bookIdToDelete) ;
    }

    @Override
    @RequestMapping(value = "/book/getAllBooks", method = RequestMethod.GET)
    @ResponseBody
    public Book[] getAllLibraryBooks() {
        LOG.info("Request to get all books was made.") ;
        List<Book> books = booksLogic.getAllBooks();
        if(books == null) {
            return new Book[0] ;
        } else {
            return books.toArray(new Book[books.size()]) ;
        }
    }

    @Override
    @RequestMapping(value = "/book/getAllBorrowedBooks", method = RequestMethod.GET)
    @ResponseBody
    public Book[] getAllBorrowedBooks() {
        LOG.info("Getting all borrowed books.") ;
        return new Book[0];
    }

    @Override
    @RequestMapping(value = "/book/getAvailableBooks", method = RequestMethod.GET)
    @ResponseBody
    public Book[] getAllAvailableBooks() {
        LOG.info("Getting all available books.") ;
        return new Book[0];
    }
}
