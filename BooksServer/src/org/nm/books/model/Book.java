package org.nm.books.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class Book implements Serializable {

    public static final Book EMPTY = new Book(new BookId("NO_ID"), "No book", "No author", -1, null);

    @EmbeddedId
    private BookId id ;

    private String name ;
    private String author ;
    private int year ;

    @ManyToOne
    @JoinColumn(referencedColumnName = "id")
    private Person owner ;

    /**
     * Default C'tor
     */
    public Book() {}

    /**
     * C'tor
     * @param id the unique ID of the book
     * @param name the name of the book
     * @param author the book's author
     * @param year the issue year.
     * @param owner the owner of the book
     */
    public Book(BookId id, String name, String author, int year, Person owner) {
        this.id     = id;
        this.name   = name;
        this.author = author;
        this.year   = year;
        this.owner  = owner;
    }

    public BookId getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getAuthor() {
        return author;
    }

    public int getYear() {
        return year;
    }

    public Person getOwner() {
        return owner;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Book book = (Book) o;

        if (year != book.year) return false;
        if (author != null ? !author.equals(book.author) : book.author != null) return false;
        if (id != null ? !id.equals(book.id) : book.id != null) return false;
        if (name != null ? !name.equals(book.name) : book.name != null) return false;
        if (owner != null ? !owner.equals(book.owner) : book.owner != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (author != null ? author.hashCode() : 0);
        result = 31 * result + year;
        result = 31 * result + (owner != null ? owner.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "Book{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", author='" + author + '\'' +
                ", year=" + year +
                ", owner=" + owner +
                '}';
    }
}
