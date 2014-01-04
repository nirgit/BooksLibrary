package org.nm.books.dal.repository;

import org.nm.books.model.Owner;
import org.nm.books.model.PersonId;
import org.springframework.data.repository.CrudRepository;

/**
 * User: Nir Moav
 * Date: 12/17/13
 * Time: 1:07 AM
 * Description:
 */
public interface OwnerRepository extends CrudRepository<Owner, PersonId> {
}
