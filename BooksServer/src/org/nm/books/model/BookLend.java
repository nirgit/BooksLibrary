package org.nm.books.model;

/**
 * User: Nir Moav
 * Date: 11/26/13
 * Time: 12:37 PM
 * Description:
 */
public class BookLend {

    private final BookId bookId ;
    private final PersonId PersonId ;

    /**
     * C'tor
     * @param bookId the ID of the book that is being lent
     * @param personId the ID of the person who takes the book
     */
    public BookLend(BookId bookId, PersonId personId) {
        this.bookId = bookId;
        PersonId = personId;
    }

    public BookId getBookId() {
        return bookId;
    }

    public PersonId getPersonId() {
        return PersonId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        BookLend bookLend = (BookLend) o;

        if (PersonId != null ? !PersonId.equals(bookLend.PersonId) : bookLend.PersonId != null) return false;
        if (bookId != null ? !bookId.equals(bookLend.bookId) : bookLend.bookId != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = bookId != null ? bookId.hashCode() : 0;
        result = 31 * result + (PersonId != null ? PersonId.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "BookLend{" +
                "bookId=" + bookId +
                ", PersonId=" + PersonId +
                '}';
    }
}
