import { Component, OnInit } from '@angular/core';
import { EmployeeSearch } from 'src/models/employeeSearch';
import { EmployeeServiceService } from 'src/services/employee-service.service';

@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.css']
})
export class EmployeeSearchComponent implements OnInit {
  employees:EmployeeSearch[] =[];
  pageNumber:number = 1;
  constructor(private employeeService:EmployeeServiceService) { }

  ngOnInit(): void {
    this.searchEmployees(null,1,10);
  }

 searchEmployees(name: string | null, pageNumber: number, pageSize: number) {
  console.log("Search");
    this.employeeService.getEmployees(name, pageNumber, pageSize)
    .subscribe((data)=>
    {
      this.employees = data;
      console.log("emp",this.employees);
    });
  }

}
