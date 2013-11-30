package org.nm.books.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * User: Nir Moav
 * Date: 11/29/13
 * Time: 11:06 AM
 * Description:
 */
@Controller
public class BookController {

    @RequestMapping(value = "/hello", method = RequestMethod.GET)
    public String sayHello() {
        return "/home" ;
    }
}
