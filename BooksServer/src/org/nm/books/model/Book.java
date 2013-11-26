package org.nm.books.model;


public class Book {

    private final BookId id ;
    private final String name ;
    private final String author ;
    private final int year ;

    private final PersonId owner ;

    /**
     * C'tor
     * @param id the unique ID of the book
     * @param name the name of the book
     * @param author the book's author
     * @param year the issue year.
     * @param owner the owner of the book
     */
    public Book(BookId id, String name, String author, int year, PersonId owner) {
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

    public PersonId getOwner() {
        return owner;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Book book = (Book) o;

        if (year != book.year) return false;
        if (!author.equals(book.author)) return false;
        if (!id.equals(book.id)) return false;
        if (!name.equals(book.name)) return false;
        if (!owner.equals(book.owner)) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id.hashCode();
        result = 31 * result + name.hashCode();
        result = 31 * result + author.hashCode();
        result = 31 * result + year;
        result = 31 * result + owner.hashCode();
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
