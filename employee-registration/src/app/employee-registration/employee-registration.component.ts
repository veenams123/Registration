import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { Employee } from 'src/models/employee';
import { EmployeeServiceService } from 'src/services/employee-service.service';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {employee:Employee = {
    
};

  
  constructor(private employeeService:EmployeeServiceService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  registerEmployee(form:NgForm) {
    Object.values(form.controls).forEach(control => {
      control.markAsTouched();
    });
    if (this.isValidForm()) 
    {
    this.employeeService.createEmployee(this.employee).subscribe(data =>{     
      this.employee = {}
      form.reset();
      this.toastr.success('Employee added successfully', 'Success');
    })
  }
  else {

    // Form is invalid, display error messages or take appropriate action
    console.log('Form is invalid. Please check the errors.');
  }
  }
  isValidForm(): boolean {
    return !!this.employee.firstName && !!this.employee.email;
  }

}
