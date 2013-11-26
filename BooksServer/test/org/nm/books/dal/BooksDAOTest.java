package org.nm.books.dal;

import junit.framework.Assert;
import org.junit.Before;
import org.junit.Test;
import org.nm.books.model.Book;
import org.nm.books.model.BookId;

import java.util.List;

/**
 * User: Nir Moav
 * Date: 11/26/13
 * Time: 1:20 PM
 * Description:
 */
public class BooksDAOTest {

    private BooksDAO booksDAO ;

    @Before
    public void setUp() throws Exception {
        this.booksDAO = new BooksDAO() ;
    }

    @Test
    public void testGetAllBooks() throws Exception {
        List<Book> allBooks = this.booksDAO.getAllBooks() ;
        int amountOfBooks = allBooks.size() ;
        Assert.assertNotNull(allBooks);
        Book myBook = new Book(new BookId("2"), "java", "me", 1999, null);
        this.booksDAO.addBook(myBook);
        Assert.assertTrue(amountOfBooks == this.booksDAO.getAllBooks().size() - 1);
    }

    @Test
    public void testGetAllAvailableBooks() throws Exception {
        List<Book> availBooks = this.booksDAO.getAllAvailableBooks();
        Assert.assertNotNull(availBooks);
    }

    @Test
    public void testLendABook() throws Exception {
        // TODO NMO 11/26/13 - finish the tests
    }

    @Test
    public void testReturnBook() throws Exception {
        // TODO NMO 11/26/13 - finish the tests
    }

    @Test
    public void testAddBook() throws Exception {
        int amountOfBooks = this.booksDAO.getAllBooks().size() ;
        BookId bookId = new BookId("2");
        Book myBook = new Book(bookId, "java", "me", 1999, null);
        this.booksDAO.addBook(myBook);
        int amountOfBooksAfterAdd = this.booksDAO.getAllBooks().size() ;
        Assert.assertTrue(amountOfBooksAfterAdd == amountOfBooks + 1);

        Book b = this.booksDAO.getBookById(bookId) ;
        Assert.assertEquals(myBook, b);
    }

    @Test
    public void testRemoveBook() throws Exception {
        BookId bookId = new BookId("2");
        Book myBook = new Book(bookId, "java", "me", 1999, null);
        this.booksDAO.addBook(myBook);

        this.booksDAO.removeBook(bookId) ;
        Assert.assertNull(this.booksDAO.getBookById(bookId)) ;
    }
}
