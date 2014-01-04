package org.nm.books.model.dal;

import org.nm.books.model.Owner;
import org.nm.books.model.Person;
import org.nm.books.model.PersonId;

/**
 * User: Nir Moav
 * Date: 12/20/13
 * Time: 2:31 PM
 * Description:
 */
public interface IPersonDAO {

    void addOwner(Owner owner) ;

    Person findPersonById(PersonId personId) ;

    void deletePerson(PersonId personId) ;

    Owner findOwnerByEmail(String email);
}
