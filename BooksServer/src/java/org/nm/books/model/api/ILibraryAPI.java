package org.nm.books.model.api;

import org.nm.books.model.BookId;

/**
 * User: Nir Moav
 * Date: 12/24/13
 * Time: 12:34 AM
 * Description: The Library API as it should function to the Users of the library.
 */
public interface ILibraryAPI {
    //  BOOKS MANAGEMENT
    IBooksAPI getBooksAPI() ;

    //  OWNERS MANAGEMENT
    IOwnerAPI getOwnersAPI() ;

    //  USERS MANAGEMENT
    IUsersAPI getUsersAPI() ;

    //  LIBRARY MANAGEMENT
    void lendABook(BookId bookId) ;
    void returnABook(BookId bookId) ;
}
