package org.nm.books.model;

import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * User: Nir Moav
 * Date: 12/23/13
 * Time: 11:54 PM
 * Description:
 */
@Entity
@Table(name = "owners")
public class Owner extends Person {

    /**
     * C'tor
     */
    public Owner() {}

    public Owner(PersonId id, String name, String email) {
        super(id, name, email);
    }
}
