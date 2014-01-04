package org.nm.books.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import java.io.Serializable;

/**
 * User: Nir Moav
 * Date: 11/26/13
 * Time: 12:36 PM
 * Description:
 */
@Entity
@Inheritance(strategy= InheritanceType.TABLE_PER_CLASS)
public class Person implements Serializable {

    @Id
    private PersonId id ;
    private String name ;
    private String email ;

    public Person() {
    }

    /**
     * C'tor
     * @param id the Identifier of the person.
     * @param name the name of the person
     * @param email the email of the person.
     */
    public Person(PersonId id, String name, String email) {
        this.id     = id;
        this.name   = name;
        this.email  = email;
    }

    public PersonId getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Person person = (Person) o;

        if (id != person.id) return false;
        if (!email.equals(person.email)) return false;
        if (!name.equals(person.name)) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (email != null ? email.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "Person{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
