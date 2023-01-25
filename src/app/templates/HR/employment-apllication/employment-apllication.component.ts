import { Router } from '@angular/router';
import { TemplateService } from './../../../template.service';
import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-employment-apllication',
  templateUrl: './employment-apllication.component.html',
  styleUrls: ['./employment-apllication.component.css'],
})
export class EmploymentApllicationComponent implements OnInit {
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

  constructor(
    private _saveemptemplate: TemplateService,
    private _router: Router,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {}

  registerEmployment() {
    console.log('gender', this.applicationEmpData);
    this._saveemptemplate
      .saveemployee(this.applicationEmpData)
      .subscribe((data: any) => {
        console.log(data.data);
        this.message = data.message;
        this.toast.success({
          detail: 'SUCCESS',
          summary: data.message,
          duration: 5000,
        });

        setTimeout(() => {
          this._router.navigate([
            `/employe-doc/employe-doc-view/${data.data._id}`,
          ]);
        }, 2000);
      });
  }
}
