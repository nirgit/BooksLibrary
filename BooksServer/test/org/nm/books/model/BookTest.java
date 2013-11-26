package org.nm.books.model;

import junit.framework.Assert;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.JUnit4;

/**
 * User: Nir Moav
 * Date: 11/26/13
 * Time: 11:03 AM
 * Description:
 */
@RunWith(JUnit4.class)
public class BookTest {

    private final String BOOK_ID    = "id-123" ;
    private final String BOOK_NAME  = "Javascript - The good parts" ;
    private final String BOOK_AUTH  = "Douglas Crockford" ;
    private final int BOOK_YEAR     = 2008 ;

    private Book book = null ;

    @Before
    public void setUp() throws Exception {
        this.book = new Book(BOOK_ID, BOOK_NAME, BOOK_AUTH , BOOK_YEAR, owner) ;
    }

    @After
    public void tearDown() throws Exception {
        this.book = null ;
    }

    @Test
    public void testGetId() {
        String bookId = this.book.getId();
        Assert.assertEquals(BOOK_ID, bookId);
    }

}

