import { NgToastService } from 'ng-angular-popup';
import { Router, ActivatedRoute } from '@angular/router';
import { TemplateService } from './../template.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css'],
})
export class UpdateEmployeeComponent implements OnInit {


  public id: String = '';

  applicationEmpData = {
    first_name: '',
    last_name: '',
    email: '',
    address: '',
    city: '',
    zip_code: '',
    state: '',
    gender: '',
    phone_number: '',
  };

  message = '';
  dataarray: any;

  constructor(
    private _saveemptemplate: TemplateService,
    private _router: Router,
    private toast: NgToastService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '{}';
    this.getEmpData();
  }

  getEmpData() {
    this._saveemptemplate.getemployeeapp(this.id).subscribe((data: any) => {
      console.log('data', data);
      this.dataarray = data;
      console.log()
    });
  }

  updateEmployment() {
    this._saveemptemplate
    .updateemployeeApplicationData(this.applicationEmpData,this.id)
    .subscribe((data: any) => {
      console.log("update data",data.data);
      this.message = data.message;
      this.toast.success({
        detail: 'SUCCESS',
        summary: data.message,
        duration: 5000,
      });

      setTimeout(() => {
        this._router.navigate([
          `/employe-doc/employe-doc-view/${this.id}`,
        ]);
      }, 2000);
    });
}
  }

