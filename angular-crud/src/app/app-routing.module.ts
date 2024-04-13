import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { DetailEmployeesComponent } from './detail-employees/detail-employees.component';
import { AddEmployeesComponent } from './add-employees/add-employees.component';

const routes: Routes = [
  {
    path: 'employees',
    component: EmployeesComponent,
  },
  {
    path: 'detailemployees/:id',
    component: DetailEmployeesComponent,
  },
  {
    path: 'addemployees',
    component: AddEmployeesComponent,
  },
  {
    path: 'addemployees/:id',
    component: AddEmployeesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
