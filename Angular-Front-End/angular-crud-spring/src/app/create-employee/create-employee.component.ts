import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  createEmployeeForm:FormGroup;

  employee :Employee=new Employee();

  constructor(private fb:FormBuilder,private srvc:EmployeeService,private router:Router) { }

  submit(){
    let url='http://localhost:4545/api/v1/addemployee';
    this.employee = this.createEmployeeForm.value;
    console.log(this.employee);
    let req = this.employee;
    this.srvc.createEmployee(url,req).subscribe(
      (res)=>{
        console.log(res);
        alert("Employee Created Succeefully in DataBase");
        this.router.navigate(['/employees']);
      }
    )
  }

  ngOnInit(): void {
    this.createEmployeeForm = this.fb.group({
      firstName:[''],
      lastName:[''],
      emailId:['']
    }
    )
  }

}
