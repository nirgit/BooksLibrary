package org.nm.books.dal;

import org.nm.books.dal.repository.PeopleRepository;
import org.nm.books.model.Person;
import org.nm.books.model.PersonId;
import org.nm.books.model.dal.IPersonDAO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * User: Nir Moav
 * Date: 12/17/13
 * Time: 1:07 AM
 * Description:
 */
@Component("peopleDao")
public class PersonDAO implements IPersonDAO {

    private final static Logger LOG = LoggerFactory.getLogger(PersonDAO.class) ;

    @Autowired
    PeopleRepository peopleRepository;

    /**
     * C'tor
     */
    public PersonDAO() {
    }

    @Override
    public void addPerson(Person person) {
        if(person == null) {
            LOG.error("Person to add can't be NULL.");
        } else {
            if(this.findPersonById(person.getId()) == null) {
                peopleRepository.save(person) ;
                LOG.info(person.toString() + "\twas saved successfully.") ;
            } else {
                LOG.info("Person already exists.") ;
            }
        }
    }

    @Override
    public Person findPersonById(PersonId personId) {
        Person result = null ;
        if(personId != null) {
            result = peopleRepository.findOne(personId) ;
        }
        return result ;
    }

    @Override
    public void deletePerson(PersonId personId) {
        if(personId != null) {
            peopleRepository.delete(personId);
        } else {
            LOG.error("Can't delete a person matching a null ID.");
        }
    }

    @Override
    public Person findPersonByEmail(String email) {
        if(email == null) {
            LOG.error("Can't find person with a corresponding NULL email") ;
            return null ;
        }
        // TODO NMO 12/21/13 - BAD implementation - replace with a good query.
        Iterable<Person> people = peopleRepository.findAll() ;
        Person result = null ;
        for(Person p : people) {
            if(email.equals(p.getEmail())) {
                result = p ;
                break ;
            }
        }
        return result ;
    }
}
