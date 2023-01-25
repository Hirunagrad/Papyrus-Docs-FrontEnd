import { TemplateService } from './../template.service';
import { NgToastService } from 'ng-angular-popup';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-files',
  templateUrl: './employee-files.component.html',
  styleUrls: ['./employee-files.component.css'],
})
export class EmployeeFilesComponent implements OnInit {
  specialEvents: any;

  constructor(
    private saveemptemplate: TemplateService,
    private router: Router,
    private toast: NgToastService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.saveemptemplate.getemployeeallApplicationData().subscribe((data:any) => {
    //   //console.log('data', data);
    //   this.specialEvents = data;
    // });
    console.log(this.specialEvents);

    this.getEmpData();



  }

  getEmpData(){
    this.saveemptemplate
    .getemployeeallApplicationData()
    .subscribe((res: any) => {
      this.specialEvents = res;
      console.log('special', res);
    });
  }

  redirectPage(id: any) {
    this.router.navigate([`/employe-doc/employe-doc-view/${id}`]);
  }
}
