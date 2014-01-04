package org.nm.books.model.api;

import org.nm.books.model.Book;
import org.nm.books.model.BookId;

/**
 * User: Nir Moav
 * Date: 12/24/13
 * Time: 11:39 PM
 * Description:
 */
public interface IBooksAPI {

    void addBook(String bookName, String bookAuthor, int bookYear, String ownerName, String ownerEmail) ;

    void deleteBook(BookId bookIdToDelete) ;

    Book getBook(String name) ;

    Book[] getAllLibraryBooks() ;

    Book[] getAllBorrowedBooks() ;

    Book[] getAllAvailableBooks() ;
}
