package org.nm.books.dal.mock;

import org.nm.books.model.Book;
import org.nm.books.model.Person;
import org.nm.books.model.dal.IBooksDAO;
import org.nm.books.model.dal.IPersonDAO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.List;

/**
 * User: Nir Moav
 * Date: 12/21/13
 * Time: 10:40 PM
 * Description:
 */
@Component
public class MockPopulatorDAO {

    private final static Logger LOG = LoggerFactory.getLogger(MockPopulatorDAO.class) ;

    @Autowired
    private IPersonDAO peopleDAO ;

    @Autowired
    private IBooksDAO booksDAO ;

    /**
     * C'tor
     */
    public MockPopulatorDAO() {}

    @PostConstruct
    public void init() {
        MockDataSource dataSource = new MockDataSource() ;
        addMockPeople(dataSource);
        addMockBooks(dataSource);
    }

    private void addMockPeople(MockDataSource dataSource) {
        List<Person> bookOwners = dataSource.getAllBookOwners();
        for(Person p : bookOwners) {
            peopleDAO.addPerson(p);
        }
    }

    private void addMockBooks(MockDataSource dataSource) {
        List<Book> allBooks = dataSource.getAllBooks();
        for(Book book : allBooks) {
            booksDAO.addBook(book) ;
        }
    }
}
