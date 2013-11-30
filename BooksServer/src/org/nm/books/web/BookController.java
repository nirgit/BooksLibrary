package org.nm.books.web;

import org.nm.books.model.Book;
import org.nm.books.model.BookId;
import org.nm.books.model.PersonId;
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

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String sayHello() {
        return "/home" ;
    }

    // return the json!
    @RequestMapping("/book")
    public @ResponseBody Book getBook(
            @RequestParam(value="name", required=false, defaultValue="World") String name) {
        return new Book(new BookId("111"), "Spring REST JSON", "Nir", 2013, new PersonId(23)) ;
    }
}
