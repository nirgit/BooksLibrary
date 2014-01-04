package org.nm.books.model.dal;

import org.nm.books.model.Book;
import org.nm.books.model.BookId;
import org.nm.books.model.BookLend;

import java.util.List;

/**
 * User: Nir Moav
 * Date: 11/26/13
 * Time: 12:43 PM
 * Description: an interface for the books DAO
 */
public interface IBooksDAO {

    /**
     * @return a list of all the books in the library.
     */
    List<Book> getAllBooks() ;

    /**
     * @return a list of all the available books in the library.
     */
    List<Book> getAllAvailableBooks() ;

    /**
     * Lend a book from the library.
     * @param lend
     */
    void lendABook(BookLend lend) ;

    /**
     * Return a book to the library
     * @param lend
     */
    void returnBook(BookLend lend) ;

    void addBook(Book book) ;

    void removeBook(BookId book) ;

    Book getBookById(BookId bookId);

    List<BookLend> getLentBooks();
}
