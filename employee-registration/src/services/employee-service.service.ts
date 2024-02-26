import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, catchError, map, throwError } from 'rxjs';
import { Employee } from 'src/models/employee';
import { EmployeeSearch } from 'src/models/employeeSearch';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  baseUrl = "https://localhost:7236/api/Employee";

  constructor(private httpClient:HttpClient) { }

  getEmployees(name: string | null, pageNumber: number, pageSize: number): Observable<EmployeeSearch[]> {
    let params = new HttpParams();
    if (name) {
      params = params.set('name', name);
    }
    params = params.set('pageNumber', pageNumber.toString())
                   .set('pageSize', pageSize.toString());

    return this.httpClient.get<EmployeeSearch[]>(`${this.baseUrl}/search`, { params })
      .pipe(
        catchError(this.handleError)
      );
  }

  createEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post(`${this.baseUrl}/register`, employee)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(() => {
      return error;
    });
  }
}
