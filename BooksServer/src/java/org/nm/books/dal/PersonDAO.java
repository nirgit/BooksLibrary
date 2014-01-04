package org.nm.books.dal;

import org.nm.books.dal.repository.BorrowerRepository;
import org.nm.books.dal.repository.OwnerRepository;
import org.nm.books.model.Owner;
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
    BorrowerRepository borrowerRepository;

    @Autowired
    OwnerRepository ownerRepository;

    /**
     * C'tor
     */
    public PersonDAO() {
    }

    @Override
    public void addOwner(Owner owner) {
        if(owner == null) {
            LOG.error("Person to add can't be NULL.");
        } else {
            if(this.findPersonById(owner.getId()) == null) {
                ownerRepository.save(owner) ;
                LOG.info(owner.toString() + "\twas saved successfully.") ;
            } else {
                LOG.info("Person already exists.") ;
            }
        }
    }

    @Override
    public Person findPersonById(PersonId personId) {
        Person result = null ;
        if(personId != null) {
            result = borrowerRepository.findOne(personId) ;
        }
        return result ;
    }

    @Override
    public void deletePerson(PersonId personId) {
        if(personId != null) {
            borrowerRepository.delete(personId);
        } else {
            LOG.error("Can't delete a person matching a null ID.");
        }
    }

    @Override
    public Owner findOwnerByEmail(String email) {
        if(email == null) {
            LOG.error("Can't find person with a corresponding NULL email") ;
            return null ;
        }
        // TODO NMO 12/21/13 - BAD implementation - replace with a good query.
        Iterable<Owner> owners = ownerRepository.findAll() ;
        Owner result = null ;
        for(Owner owner : owners) {
            if(email.equals(owner.getEmail())) {
                result = owner ;
                break ;
            }
        }
        return result ;
    }
}
