package agh.spring.repository;

import agh.spring.dao.Person;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface PersonsRepository extends CrudRepository<Person,Long> {
    List<Person> findAll();

    Person findById(int id);
    Person save(Person person);

}

