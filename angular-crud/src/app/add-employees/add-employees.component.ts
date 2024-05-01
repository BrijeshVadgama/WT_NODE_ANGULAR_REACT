import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiEmployeesService } from '../services/api-employees.service';

@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrl: './add-employees.component.css',
})
export class AddEmployeesComponent {
  constructor(
    private _as: ApiEmployeesService,
    private _ar: ActivatedRoute,
    private _r: Router
  ) {}
  idEdit = -1;
  data = {
    EmployeeName: '',
    EmployeeAddress: '',
  };
  ngOnInit(): void {
    this.idEdit = this._ar.snapshot.params['id'];
    this._as.getEmpById(this.idEdit).subscribe((res: any) => {
      this.data.EmployeeName = res.EmployeeName;
      this.data.EmployeeAddress = res.EmployeeAddress;
    });
  }
  saveEmp(myForm: any) {
    if (this.idEdit) {
      this._as.UpdateEmp(this.idEdit, myForm).subscribe(() => {
        this._r.navigate(['employees']);
      });
    } else {
      this._as.AddEmp(myForm).subscribe(() => {
        this._r.navigate(['employees']);
      });
    }
  }
}
