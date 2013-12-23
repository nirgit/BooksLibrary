package org.nm.books.dal.repository;

import org.nm.books.model.LibraryUser;
import org.nm.books.model.Person;
import org.nm.books.model.PersonId;
import org.springframework.data.repository.CrudRepository;

/**
 * User: Nir Moav
 * Date: 12/17/13
 * Time: 1:07 AM
 * Description:
 */
public interface BorrowerRepository extends CrudRepository<LibraryUser, PersonId> {
}
