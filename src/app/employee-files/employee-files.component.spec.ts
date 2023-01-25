import { TemplateService } from './../template.service';
import { RouterTestingModule } from '@angular/router/testing';

import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFilesComponent } from './employee-files.component';
import { of } from 'rxjs';

describe('EmployeeFilesComponent', () => {
  let component: EmployeeFilesComponent;
  let fixture: ComponentFixture<EmployeeFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeFilesComponent],
      imports: [HttpClientModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Spy test run', () => {
    let service = fixture.debugElement.injector.get(TemplateService);
    spyOn(service, 'getemployeeallApplicationData').and.callFake(() => {
      return of({
        "results": 200,
      });
    });


    component.getEmpData();
    expect(component.specialEvents).toEqual({
      "results":200
    })
  });
});
