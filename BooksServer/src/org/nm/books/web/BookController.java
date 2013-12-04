package org.nm.books.web;

import org.nm.books.model.Book;
import org.nm.books.model.logic.IBooksLogic;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * User: Nir Moav
 * Date: 11/29/13
 * Time: 11:06 AM
 * Description:
 */
@Controller
public class BookController {

    private final static Logger LOG = LoggerFactory.getLogger(BookController.class) ;

    @Autowired
    IBooksLogic booksLogic ;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String sayHello() {
        return "/home" ;
    }

    // return the json!
    @RequestMapping("/book")
    public @ResponseBody Book getBook(
            @RequestParam(value="name", required=false, defaultValue="World") String name) {
        Book b = booksLogic.getBookByName(name) ;
        LOG.info("The book that was found which was matching the name is:\t" + (b != null ? b.toString() : "NULL.")) ;
        return b ;
    }
}
