package org.nm.books.dal;

import org.springframework.data.repository.CrudRepository;

import java.io.Serializable;

/**
 * User: Nir Moav
 * Date: 12/6/13
 * Time: 11:05 AM
 * Description:
 */
interface IDAO<T, I extends Serializable> { //extends CrudRepository<T, I> {
}
