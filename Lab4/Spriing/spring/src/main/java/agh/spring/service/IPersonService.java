package agh.spring.service;

import agh.spring.dao.Person;

import java.util.List;

public interface IPersonService {
    public List<Person> getAllPeople();
    public Person getById(int id);

    public Person create(Person person);


}
