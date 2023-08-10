package smartcode.in.springangularcruddatabase.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import smartcode.in.springangularcruddatabase.model.Employee;
import smartcode.in.springangularcruddatabase.repository.EmployeeRepository;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
@RequestMapping("/api/v1/")
public class EmployeeController {

    @Autowired
    private EmployeeRepository repository;

    // get All Employees
    @GetMapping("/employees")
    public List<Employee> getAllEmployee(){
        return repository.findAll();
    }

    // create employee rest api
    @PostMapping("/addemployee")
    public Employee createEmployee(@RequestBody Employee e){
        return repository.save(e);
    }

    // get Employee by id restAPI
    @GetMapping("/employees/{id}")
    public Employee getEmployeeById(@PathVariable int id){
        return repository.findById(id).orElse(null);
    }

    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable int id, @RequestBody Employee e){
        Employee employee = repository.findById(id).orElse(null);
        employee.setFirstName(e.getFirstName());
        employee.setLastName(e.getLastName());
        employee.setEmailId(e.getEmailId());
        Employee details= repository.save(employee);
        return ResponseEntity.ok(details);
    }

    @DeleteMapping("/employees/{id}")
    public void deleteCourse(@PathVariable int id){
        repository.deleteById(id);
    }
}
