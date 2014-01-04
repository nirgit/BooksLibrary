package org.nm.books.model;

import javax.persistence.Embeddable;
import java.io.Serializable;

/**
 * User: Nir Moav
 * Date: 11/26/13
 * Time: 12:38 PM
 * Description:
 */
@Embeddable
public class BookId implements Serializable {

    private String id ;

    public BookId() {}

    public BookId(String id) {
        this.id = id;
    }

    public String getId() {
        return id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        BookId bookId = (BookId) o;

        if (id != null ? !id.equals(bookId.id) : bookId.id != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

    @Override
    public String toString() {
        return "BookId{" +
                "id='" + id + '\'' +
                '}';
    }
}
