package org.nm.books.logic;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

/**
 * User: Nir Moav
 * Date: 11/26/13
 * Time: 10:30 PM
 * Description:
 */
public class BooksLogicTest {

    private BooksLogic logic ;

    @Before
    public void setUp() throws Exception {
        this.logic = new BooksLogic(null) ;
    }

    @After
    public void tearDown() throws Exception {
        this.logic = null ;
    }

    @Test
    public void testGetAllBooks() throws Exception {

    }

    @Test
    public void testGetAllAvailableBooks() throws Exception {

    }

    @Test
    public void testGetAllBooksTakenByPerson() throws Exception {

    }

    @Test
    public void testLendABook() throws Exception {

    }

    @Test
    public void testReturnBook() throws Exception {

    }

    @Test
    public void testAddBook() throws Exception {

    }

    @Test
    public void testRemoveBook() throws Exception {

    }
}
