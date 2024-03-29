import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TemplateService } from './template.service';

describe('TemplateService', () => {
  describe('GET', () => {
    let service: TemplateService;
    let httpclient: HttpClient;
    let httptestcontrol: HttpTestingController;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [HttpClientModule, HttpClientTestingModule],
        providers: [TemplateService],
      }).compileComponents();
    });

    beforeEach(() => {
      TestBed.configureTestingModule({});
      service = TestBed.inject(TemplateService);

      httptestcontrol = TestBed.inject(HttpTestingController);
    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('get Employee Application data method', () => {
      const testpost: any = [
        { id: 1, userId: 1, title: 'title 1', body: 'body1' },
        { id: 2, userId: 2, title: 'title 2', body: 'body2' },
      ];
      service.getemployeeallApplicationData().subscribe((posts: any) => {
        expect(testpost).toBe(posts, 'should check mocked data');
      });

      const req = httptestcontrol.expectOne(
        'https://papyrusdocs1.azurewebsites.net/hrtemplate/getEmployeeApplcation'
      );
      expect(req.cancelled).toBeFalsy();
      expect(req.request.responseType).toEqual('json');

      req.flush(testpost);
      httptestcontrol.verify();
    });
  });

  describe('POST', () => {
    let service: TemplateService;
    let httpclient: HttpClient;
    let httptestcontrol: HttpTestingController;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [HttpClientModule, HttpClientTestingModule],
        providers: [TemplateService],
      }).compileComponents();
    });

    beforeEach(() => {
      TestBed.configureTestingModule({});
      service = TestBed.inject(TemplateService);

      httptestcontrol = TestBed.inject(HttpTestingController);
    });

    it('Save Employee Data post method', () => {
      const testpost: any = {
        id: 1,
        userId: 1,
        title: 'title 1',
        body: 'body1',
      };

      service.saveemployee(testpost).subscribe((posts: any) => {
        expect(testpost).toBe(testpost);
      });

      const req = httptestcontrol.expectOne(
        'https://papyrusdocs1.azurewebsites.net/hrtemplate/saveemployeeapplcation'
      );
      expect(req.cancelled).toBeFalsy();
      expect(req.request.responseType).toEqual('json');

      req.flush(testpost);
      httptestcontrol.verify();
    });
  });

  describe('DELETE', () => {
    let service: TemplateService;
    let httpclient: HttpClient;
    let httptestcontrol: HttpTestingController;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [HttpClientModule, HttpClientTestingModule],
        providers: [TemplateService],
      }).compileComponents();
    });

    beforeEach(() => {
      TestBed.configureTestingModule({});
      service = TestBed.inject(TemplateService);

      httptestcontrol = TestBed.inject(HttpTestingController);
    });
    it('DELETE Template data method', () => {
      const testpost: any = {
        id: 1,
        userId: 1,
        title: 'title 1',
        body: 'body1',
      };

      service
        .deleteemployeeApplicationData(testpost.id)
        .subscribe((posts: any) => {
          expect(testpost.id).toBe(1);
        });

      const req = httptestcontrol.expectOne(
        `https://papyrusdocs1.azurewebsites.net/template/deleteTemplate/1`
      );
      expect(req.cancelled).toBeFalsy();
      expect(req.request.responseType).toEqual('json');

      req.flush(testpost);
      httptestcontrol.verify();
    });
  });




  describe('UPDATE', () => {
    let service: TemplateService;
    let httpclient: HttpClient;
    let httptestcontrol: HttpTestingController;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [HttpClientModule, HttpClientTestingModule],
        providers: [TemplateService],
      }).compileComponents();
    });

    beforeEach(() => {
      TestBed.configureTestingModule({});
      service = TestBed.inject(TemplateService);

      httptestcontrol = TestBed.inject(HttpTestingController);
    });
    it('UPDATE Template data method', () => {
      const testpost: any = {
        id: 1,
        userId: 1,
        title: 'title 1',
        body: 'body1',
      };

      service
        .updateemployeeApplicationData(testpost,testpost.id)
        .subscribe((posts: any) => {
          expect(testpost.id).toBe(1);
        });

      const req = httptestcontrol.expectOne(
        `https://papyrusdocs1.azurewebsites.net/hrtemplate/updateTemplate/1`,testpost
      );
      expect(req.cancelled).toBeFalsy();
      expect(req.request.responseType).toEqual('json');

      req.flush(testpost);
      httptestcontrol.verify();
    });
  });
});
