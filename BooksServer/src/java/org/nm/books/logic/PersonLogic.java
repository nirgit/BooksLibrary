package org.nm.books.logic;

import org.nm.books.model.Owner;
import org.nm.books.model.Person;
import org.nm.books.model.PersonId;
import org.nm.books.model.dal.IPersonDAO;
import org.nm.books.model.logic.IPersonLogic;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * User: Nir Moav
 * Date: 12/21/13
 * Time: 11:05 PM
 * Description:
 */
@Component
public class PersonLogic implements IPersonLogic {

    private final static Logger LOG = LoggerFactory.getLogger(PersonLogic.class) ;

    @Autowired
    IPersonDAO dao ;

    @Override
    public void addOwner(String name, String email) {
        if(name == null || email == null) {
            LOG.error("Can't add a person with a NULL name or email.") ;
            return ;
        }
        long id = System.currentTimeMillis() ;
        PersonId personId = new PersonId(id) ;
        Owner toAdd = new Owner(personId, name, email) ;
        dao.addOwner(toAdd);
    }

    @Override
    public Person getPersonById(PersonId personId) {
        if(personId == null) {
            LOG.error("No matches for a NULL Person ID") ;
            return null ;
        }
        return dao.findPersonById(personId);
    }

    @Override
    public Owner getOwnerByEmail(String email) {
        return dao.findOwnerByEmail(email);
    }
}
