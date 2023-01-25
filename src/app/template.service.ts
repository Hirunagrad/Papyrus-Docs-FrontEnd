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
      'https://papyrusdocs1.azurewebsites.net/hrtemplate/saveemployeeapplcation',
      empdata
    );
  }

  getemployeeapp(id: any) {
    return this.http.get(
      `https://papyrusdocs1.azurewebsites.net/hrtemplate/getEmployeeApplcationData/${id}`
    );
  }


  getemployeeallApplicationData() {
    return this.http.get(
      `https://papyrusdocs1.azurewebsites.net/hrtemplate/getEmployeeApplcation`
    );
  }

  deleteemployeeApplicationData(id : any){
    return this.http.delete(
      `https://papyrusdocs1.azurewebsites.net/template/deleteTemplate/${id}`
    );
  }

  updateemployeeApplicationData(data : any,id: any){
    return this.http.patch(
      `https://papyrusdocs1.azurewebsites.net/hrtemplate/updateTemplate/${id}`,data
    );
  }
}
