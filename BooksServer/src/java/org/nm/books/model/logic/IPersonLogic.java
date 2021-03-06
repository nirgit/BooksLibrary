package org.nm.books.model.logic;

import org.nm.books.model.Owner;
import org.nm.books.model.Person;
import org.nm.books.model.PersonId;

/**
 * User: Nir Moav
 * Date: 12/21/13
 * Time: 10:39 PM
 * Description:
 */
public interface IPersonLogic {

    void addOwner(String name, String email) ;

    Person getPersonById(PersonId personId) ;

    Owner getOwnerByEmail(String email) ;
}
