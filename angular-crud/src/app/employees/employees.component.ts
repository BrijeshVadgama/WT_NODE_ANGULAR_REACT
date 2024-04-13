import { Component } from '@angular/core';
import { ApiEmployeesService } from '../services/api-employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css',
})
export class EmployeesComponent {
  constructor(private _as: ApiEmployeesService) {}
  employees: any = [];
  ngOnInit(): void {
    this._as.getAll().subscribe((res) => {
      this.employees = res;
    });
  }
  DeleteEmp(id: any) {
    this._as.DeleteEmp(id).subscribe(() => {
      this.ngOnInit();
    });
  }
}
