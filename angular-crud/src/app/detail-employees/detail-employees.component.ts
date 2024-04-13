import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiEmployeesService } from '../services/api-employees.service';

@Component({
  selector: 'app-detail-employees',
  templateUrl: './detail-employees.component.html',
  styleUrl: './detail-employees.component.css',
})
export class DetailEmployeesComponent {
  constructor(private _as: ApiEmployeesService, private _ar: ActivatedRoute) {}
  id: any;
  empOne: any;

  ngOnInit(): void {
    this.id = this._ar.snapshot.params['id'];
    this._as.getEmpById(this.id).subscribe((res) => {
      this.empOne = res;
    });
  }
}
