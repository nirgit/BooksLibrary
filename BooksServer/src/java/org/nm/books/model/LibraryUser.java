package org.nm.books.model;

import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * User: Nir Moav
 * Date: 12/24/13
 * Time: 12:13 AM
 * Description:
 */
@Entity
@Table(name = "library_users")
public class LibraryUser extends Person {

    /**
     * C'tor
     */
    public LibraryUser() {}

    public LibraryUser(PersonId id, String name, String email) {
        super(id, name, email);
    }
}
