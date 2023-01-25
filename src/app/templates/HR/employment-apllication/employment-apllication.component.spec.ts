import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentApllicationComponent } from './employment-apllication.component';

describe('EmploymentApllicationComponent', () => {
  let component: EmploymentApllicationComponent;
  let fixture: ComponentFixture<EmploymentApllicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmploymentApllicationComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmploymentApllicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
