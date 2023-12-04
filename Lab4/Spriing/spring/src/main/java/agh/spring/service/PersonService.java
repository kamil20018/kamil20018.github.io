package agh.spring.service;

import agh.spring.dao.Person;
import agh.spring.repository.PersonsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonService implements IPersonService{

    @Autowired
    private PersonsRepository personsRepository;

    @Override
    public List<Person> getAllPeople() {
        return personsRepository.findAll();
    }

    @Override
    public Person create(Person person) {
        return personsRepository.save(person);
    }

    @Override
    public Person getById(int id) {
        return personsRepository.findById(id);
    }
}
