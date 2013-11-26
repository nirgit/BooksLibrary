package org.nm.books.model.logic;

import org.nm.books.model.Book;
import org.nm.books.model.BookId;
import org.nm.books.model.BookLend;
import org.nm.books.model.PersonId;

import java.util.List;

/**
 * User: Nir Moav
 * Date: 11/26/13
 * Time: 12:50 PM
 * Description:
 */
public interface IBooksLogic {

    /**
     * @return a list of all the books in the library.
     */
    List<Book> getAllBooks() ;

    /**
     * @return a list of all the available books in the library.
     */
    List<Book> getAllAvailableBooks() ;

    /**
     * @param personId a person ID
     * @return a list of the books taken by the given person's ID.
     */
    List<Book> getAllBooksTakenByPerson(PersonId personId) ;

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

    /**
     * Add a book to the book collection.
     * @param book a book to add to the library.
     */
    void addBook(Book book) ;

    /**
     * Removes a book from the book collection.
     * @param book a book to remove from the library.
     */
    void removeBook(BookId book) ;
}
