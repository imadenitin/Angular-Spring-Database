import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  preserveWhitespaces:true
})
export class EmployeeListComponent implements OnInit {

  constructor(private srvc:EmployeeService,private router:Router) { }

  employees: Employee[] = [];

 update(id){
  this.router.navigate(['/update-employee',id]);
 }

  // Get Data from Database
  private getEmployees() {
    // This is API in SpringBoot App
    let url='http://localhost:4545/api/v1/employees';
    this.srvc.getEmployeeList(url).subscribe(
      (res: Employee[]) => {
        // Stored in employees object
        this.employees=res;
      }
    );
  }

  deleteEmployee(id){
    this.srvc.deleteEmployee(id).subscribe(res=>{
      alert('Employee Deleted Successfully');
      this.getEmployees();
    })
  }

  ngOnInit(): void {
    // onload this method execute
    this.getEmployees();
  }

}
