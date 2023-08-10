import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:4545/api/v1/employees';

  getEmployeeList(url): Observable<Employee[]> {
    return this.http.get<Employee[]>(url);
  }
  // Create New Employee Service here
  createEmployee(url, data): Observable<Employee[]> {
    return this.http.post<Employee[]>(url, data);
  }

  getEmployeeById(id): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUrl}/${id}`);
  }

  // Update Employee Data Service
  updateEmployee(id, data): Observable<Employee> {
    return this.http.put<Employee>(this.baseUrl + "/" + id, data);
  }

  deleteEmployee(id):Observable<Employee>{
    return this.http.delete<Employee>(this.baseUrl+"/"+id);
  }
}
