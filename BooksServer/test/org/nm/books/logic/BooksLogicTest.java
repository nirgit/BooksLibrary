package org.nm.books.logic;

import junit.framework.Assert;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.nm.books.dal.BooksDAO;
import org.nm.books.model.*;
import org.nm.books.model.dal.IBooksDAO;

import java.util.ArrayList;
import java.util.List;

/**
 * User: Nir Moav
 * Date: 11/26/13
 * Time: 10:30 PM
 * Description:
 */
public class BooksLogicTest {

    private final static Book BOOK =
            new Book(new BookId("b-ID1"), "test book", "nir", 2013, new Owner(new PersonId(11L), null, null)) ;
    private BooksLogic logic ;

    @Before
    public void setUp() throws Exception {
        IBooksDAO dao = createMockDao();
        this.logic = new BooksLogic(dao) ;
    }

    private IBooksDAO createMockDao() {
        List<Book> books = new ArrayList<Book>() ;
        books.add(BOOK) ;

        return new BooksDAO() ;
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
        BookLend lend = new BookLend(new BookId("b-ID1"), new PersonId(123L));
        this.logic.lendABook(lend);

        List<Book> lentBooks = logic.getAllBooksTakenByPerson(new PersonId(456L));
        Assert.assertTrue(lentBooks.isEmpty());

        lentBooks = logic.getAllBooksTakenByPerson(new PersonId(123L)) ;
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

        PersonId personId = new PersonId(22L);
        Owner owner = new Owner(personId, null,null) ;
        Book newBook = new Book(new BookId("newBook-ID"), "Some new book", "some author", 2013, owner) ;
        this.logic.addBook(newBook);
        numberOfBooksAfterAdd = this.logic.getAllBooks().size() ;
        Assert.assertEquals(numberOfBooks + 1, numberOfBooksAfterAdd);
        this.logic.getAllBooks().contains(newBook) ;
    }

    @Test
    public void testRemoveBook() throws Exception {

    }
}
