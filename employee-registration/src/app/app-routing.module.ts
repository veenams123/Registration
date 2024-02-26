import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { EmployeeSearchComponent } from './employee-search/employee-search.component';

const routes: Routes = [
  { path: 'registration-component', component: EmployeeRegistrationComponent },
  { path: 'search-component', component: EmployeeSearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
