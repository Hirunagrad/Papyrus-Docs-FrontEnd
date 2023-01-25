import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class TemplateService {
  constructor(private http: HttpClient, private router: Router) {}

  saveemployee(empdata: any) {
    return this.http.post(
      'http://localhost:5000/hrtemplate/saveemployeeapplcation',
      empdata
    );
  }

  getemployeeapp(id: any) {
    return this.http.get(
      `http://localhost:5000/hrtemplate/getEmployeeApplcationData/${id}`
    );
  }


  getemployeeallApplicationData() {
    return this.http.get(
      `http://localhost:5000/hrtemplate/getEmployeeApplcation`
    );
  }

  deleteemployeeApplicationData(id : any){
    return this.http.delete(
      `http://localhost:5000/template/deleteTemplate/${id}`
    );
  }

  updateemployeeApplicationData(data : any,id: any){
    return this.http.patch(
      `http://localhost:5000/hrtemplate/updateTemplate/${id}`,data
    );
  }
}
