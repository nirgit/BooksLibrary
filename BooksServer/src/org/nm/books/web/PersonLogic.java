package org.nm.books.web;

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
    public void addPerson(String name, String email) {
        if(name == null || email == null) {
            LOG.error("Can't add a person with a NULL name or email.") ;
            return ;
        }
        long id = System.currentTimeMillis() ;
        PersonId personId = new PersonId(id) ;
        Person toAdd = new Person(personId, name, email) ;
        dao.addPerson(toAdd);
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
    public Person getPersonByEmail(String email) {
        return dao.findPersonByEmail(email);
    }
}
