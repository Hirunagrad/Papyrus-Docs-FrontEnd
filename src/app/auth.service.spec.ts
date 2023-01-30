import { TemplateService } from './template.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  describe('POST', () => {
    let service: AuthService;
    let httpclient: HttpClient;
    let httptestcontrol: HttpTestingController;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientModule,HttpClientTestingModule],
        providers: [AuthService],
      }).compileComponents();

    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    beforeEach(() => {
      TestBed.configureTestingModule({});
      service = TestBed.inject(AuthService);

      httptestcontrol = TestBed.inject(HttpTestingController);
    });

    it('login testing', () => {
      const testLogin: any = {
        email: 'hirunagrad@gmail.com',
        password: 'hirunagrad',
      };

      const testinData : any = {
        email: 'hirunagrad@gmail.com',
        password: 'hirunagra',
      }

      service.loginUser(testLogin).subscribe((posts: any) => {
        expect(testLogin).toBe(testLogin);
      });

      const req = httptestcontrol.expectOne('https://papyrusdocs1.azurewebsites.net/api/login');
      expect(req.cancelled).toBeFalsy();
      expect(req.request.responseType).toEqual('json');

      req.flush(testLogin);
      httptestcontrol.verify();
    });

    it('sign Up testing', () => {
      const testLogin: any = {
        email: 'hirunagrad@gmail.com',
        password: 'hirunagrad',
        role:"HR"
      };

      service.registerUser(testLogin).subscribe((posts: any) => {
        expect(testLogin).toBe(testLogin);
      });

      const req = httptestcontrol.expectOne('https://papyrusdocs1.azurewebsites.net/api/register');
      expect(req.cancelled).toBeFalsy();
      expect(req.request.responseType).toEqual('json');

      req.flush(testLogin);
      httptestcontrol.verify();
    });
  });
});
