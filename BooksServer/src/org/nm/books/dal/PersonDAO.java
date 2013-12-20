package org.nm.books.dal;

import org.nm.books.dal.repository.PeopleRepository;
import org.nm.books.model.Person;
import org.nm.books.model.PersonId;
import org.nm.books.model.dal.IPersonDAO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

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
}
