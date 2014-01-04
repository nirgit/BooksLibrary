package org.nm.books.dal.repository;

import org.nm.books.model.Book;
import org.nm.books.model.BookId;
import org.springframework.data.repository.CrudRepository;

/**
 * User: Nir Moav
 * Date: 12/17/13
 * Time: 12:21 AM
 * Description:
 */
public interface BooksRepository extends CrudRepository<Book, BookId> {
}
