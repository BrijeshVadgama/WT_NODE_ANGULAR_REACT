import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiEmployeesService {
  constructor(private _hc: HttpClient) {}
  apiUrl = 'http://localhost:5000/Employees/';

  getAll() {
    return this._hc.get(this.apiUrl);
  }
  getEmpById(id: any) {
    return this._hc.get(this.apiUrl + id);
  }
  DeleteEmp(id: any) {
    return this._hc.delete(this.apiUrl + id);
  }
  AddEmp(form: any) {
    return this._hc.post(this.apiUrl, form);
  }
  UpdateEmp(id: any, form: any) {
    return this._hc.put(this.apiUrl + id, form);
  }
}
