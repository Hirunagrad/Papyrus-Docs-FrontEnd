import { WebSocketService } from './chat/chat-start/web-socket.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { AuthGuard } from './auth.guard';
import { RouterModule } from '@angular/router';
import { EventService } from './event.service';
import { AuthService } from './auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { EmploymentApllicationComponent } from './templates/HR/employment-apllication/employment-apllication.component';
import { NotifierModule } from 'angular-notifier';
import { NgToastModule } from 'ng-angular-popup';
import { EmpappviewComponent } from './templates-views/empappview/empappview.component';
import { EmployeeFilesComponent } from './employee-files/employee-files.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ChatStartComponent } from './chat/chat-start/chat-start.component';
import { TestingComponent } from './testing/testing.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EventsComponent,
    SpecialEventsComponent,
    EmploymentApllicationComponent,
    EmpappviewComponent,
    EmployeeFilesComponent,
    UpdateEmployeeComponent,
    ChatStartComponent,
    TestingComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    NotifierModule,
    NgToastModule,


  ],
  providers: [
    AuthService,
    EventService,
    WebSocketService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
