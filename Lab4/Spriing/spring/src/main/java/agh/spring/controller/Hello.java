package agh.spring.controller;

import agh.spring.dao.Person;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import agh.spring.service.PersonService;
@RestController
public class Hello {
    @Autowired
    private PersonService personService;

    @GetMapping("/hello")
    public String hello(@RequestParam(value = "name", defaultValue = "imie jakies losowe") String name){
        return "siema " + name;
    }

    @PostMapping("/create")
    public Person create(@RequestParam(value="name") String name,
                         @RequestParam(value = "surname") String surname,
                         @RequestParam(value = "job") String job){
        Person person=new Person(name,surname,job);
        return personService.create(person);
    }
    @GetMapping("/id")
    public Person getById(@PathVariable(value = "id")int id){
        return personService.getById(id);
    }
}
