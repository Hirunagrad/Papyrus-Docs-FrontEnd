import { NgToastService } from 'ng-angular-popup';
import { Router, ActivatedRoute } from '@angular/router';
import { TemplateService } from './../../template.service';
import { jsPDF } from 'jspdf';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-empappview',
  templateUrl: './empappview.component.html',
  styleUrls: ['./empappview.component.css'],
})
export class EmpappviewComponent implements OnInit {
  public id: String = '';
  dataarray: any;

  updatedataset = {};

  constructor(
    private saveemptemplate: TemplateService,
    private _router: Router,
    private toast: NgToastService,
    private route: ActivatedRoute
  ) {}

  @ViewChild('content', { static: false }) el!: ElementRef;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '{}';
    console.log('id', this.id);
    this.getEmpData();
  }

  makePDF() {
    let pdf = new jsPDF('p', 'pt', 'a3');
    pdf.html(this.el.nativeElement, {
      callback: (pdf) => {
        pdf.save('demo.pdf');
      },
    });
  }

  getEmpData() {
    this.saveemptemplate.getemployeeapp(this.id).subscribe((data: any) => {
      console.log('data', data);
      this.dataarray = data;
    });
  }

  deleteEmpData() {
    this.saveemptemplate
      .deleteemployeeApplicationData(this.id)
      .subscribe((data: any) => {
        console.log(data.message);
        this._router.navigate(['home/employeefiles']);
      });
  }

  upadateEmpData() {

        this._router.navigate([`updateempdata/${this.id}`]);

  }
}
