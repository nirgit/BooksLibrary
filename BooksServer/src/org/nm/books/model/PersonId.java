package org.nm.books.model;

import javax.persistence.Embeddable;
import java.io.Serializable;

/**
 * User: Nir Moav
 * Date: 11/26/13
 * Time: 12:39 PM
 * Description:
 */
@Embeddable
public class PersonId implements Serializable {

    private Long id ;

    public PersonId() {}

    public PersonId(Long id) {
        this.id = id;
    }

    public long getId() {
        return id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        PersonId personId = (PersonId) o;

        if (id != personId.id) return false;

        return true;
    }

    @Override
    public int hashCode() {
        return id.hashCode();
    }

    @Override
    public String toString() {
        return "PersonId{" +
                "id=" + id +
                '}';
    }
}
