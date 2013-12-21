package org.nm.books.model.dal;

import org.nm.books.model.Person;
import org.nm.books.model.PersonId;

/**
 * User: Nir Moav
 * Date: 12/20/13
 * Time: 2:31 PM
 * Description:
 */
public interface IPersonDAO {

    void addPerson(Person person) ;

    Person findPersonById(PersonId personId) ;

    void deletePerson(PersonId personId) ;

    Person findPersonByEmail(String email);
}
