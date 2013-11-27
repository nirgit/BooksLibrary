package org.nm.books.logic;

import junit.framework.Assert;
import org.easymock.EasyMock;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.nm.books.dal.BooksDAO;
import org.nm.books.model.Book;
import org.nm.books.model.BookId;
import org.nm.books.model.BookLend;
import org.nm.books.model.PersonId;
import org.nm.books.model.dal.IBooksDAO;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * User: Nir Moav
 * Date: 11/26/13
 * Time: 10:30 PM
 * Description:
 */
public class BooksLogicTest {

    private final static Book BOOK = new Book(new BookId("b-ID1"), "test book", "nir", 2013, new PersonId(11)) ;
    private BooksLogic logic ;

    @Before
    public void setUp() throws Exception {
        IBooksDAO dao = createMockDao();
        this.logic = new BooksLogic(dao) ;
    }

    private IBooksDAO createMockDao() {
        List<Book> books = new ArrayList<Book>() ;
        books.add(BOOK) ;

        return new BooksDAO(books) ;
    }

    @After
    public void tearDown() throws Exception {
        this.logic = null ;
    }

    @Test
    public void testGetAllBooks() throws Exception {
        List<Book> books = this.logic.getAllBooks();
        Assert.assertNotNull(books);
    }

    @Test
    public void testGetAllAvailableBooks() throws Exception {
        List<Book> allBooks = this.logic.getAllBooks() ;
        List<Book> availBooks = this.logic.getAllAvailableBooks() ;

        Assert.assertEquals(allBooks, availBooks);
    }

    @Test
    public void testGetAllBooksTakenByPerson() throws Exception {
        BookLend lend = new BookLend(new BookId("b-ID1"), new PersonId(123));
        this.logic.lendABook(lend);

        List<Book> lentBooks = logic.getAllBooksTakenByPerson(new PersonId(456));
        Assert.assertTrue(lentBooks.isEmpty());

        lentBooks = logic.getAllBooksTakenByPerson(new PersonId(123)) ;
        Assert.assertEquals(lentBooks.size(), 1);
        Assert.assertEquals(lentBooks.get(0), BOOK);
    }

    @Test
    public void testLendABook() throws Exception {

    }

    @Test
    public void testReturnBook() throws Exception {

    }

    @Test
    public void testAddBook() throws Exception {
        int numberOfBooks = this.logic.getAllBooks().size() ;
        this.logic.addBook(null);
        int numberOfBooksAfterAdd = this.logic.getAllBooks().size() ;
        Assert.assertEquals(numberOfBooks, numberOfBooksAfterAdd);

        Book newBook = new Book(new BookId("newBook-ID"), "Some new book", "some author", 2013, new PersonId(22)) ;
        this.logic.addBook(newBook);
        numberOfBooksAfterAdd = this.logic.getAllBooks().size() ;
        Assert.assertEquals(numberOfBooks + 1, numberOfBooksAfterAdd);
        this.logic.getAllBooks().contains(newBook) ;
    }

    @Test
    public void testRemoveBook() throws Exception {

    }
}
