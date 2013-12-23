package org.nm.books.web;

import org.nm.books.model.Book;
import org.nm.books.model.BookId;
import org.nm.books.model.Owner;
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
public class BookController {

    private final static Logger LOG = LoggerFactory.getLogger(BookController.class) ;

    @Autowired
    IBooksLogic booksLogic ;

    @Autowired
    IPersonLogic personLogic ;

    public void addBook(String bookName, String bookAuthor, int bookYear, String ownerName, String ownerEmail) {
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

    @RequestMapping(value = "/book/getAllBooks", method = RequestMethod.GET)
    public @ResponseBody Book[] getAllBooks() {
        LOG.info("Request to get all books was made.") ;
        List<Book> books = booksLogic.getAllBooks();
        if(books == null) {
            return new Book[0] ;
        } else {
            return books.toArray(new Book[books.size()]) ;
        }
    }

    // return the json!
    @RequestMapping(value = "/book/{name}", method=RequestMethod.GET)
    public @ResponseBody Book getBook(@PathVariable String name) {
        Book b = booksLogic.getBookByName(name) ;
        LOG.info("The book that was found which was matching the name is:\t" + (b != null ? b.toString() : "NULL.")) ;
        return b ;
    }
}
