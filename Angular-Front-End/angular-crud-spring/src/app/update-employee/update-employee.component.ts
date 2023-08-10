import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  updateEmployeeForm: FormGroup;
  employee: Employee = new Employee(); // Initialize an empty employee object
  id: any;

  constructor(
    private fb: FormBuilder,
    private srvc: EmployeeService,
    private router: Router,
    private activeroute: ActivatedRoute
  ) { }

  update() {
    this.employee = this.updateEmployeeForm.value;
    let req = this.employee;
    this.srvc.updateEmployee(this.id, req).subscribe(
      res => {
        alert("Employee Updated Successfully");
        this.router.navigate(['/employees']);
      })
  }

  ngOnInit(): void {
    this.id = this.activeroute.snapshot.params['id'];
    // Here Set Value of Employee
    this.srvc.getEmployeeById(this.id).subscribe((res) => {
      this.employee = res;
      this.updateEmployeeForm.patchValue(this.employee);
    });
    this.updateEmployeeForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      emailId: [''],
    });
  }

}
