import { ChatStartComponent } from './chat/chat-start/chat-start.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeFilesComponent } from './employee-files/employee-files.component';
import { EmpappviewComponent } from './templates-views/empappview/empappview.component';
import { EmploymentApllicationComponent } from './templates/HR/employment-apllication/employment-apllication.component';
import { AuthGuard } from './auth.guard';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { EventsComponent } from './events/events.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: EventsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'chatapp',
    component: ChatStartComponent,
  },
  {
    path: 'home/employeefiles',
    component: EmployeeFilesComponent,
  },
  {
    path: 'employe-doc',
    component: EmploymentApllicationComponent,
  },
  {
    path: 'updateempdata/:id',
    component: UpdateEmployeeComponent,
  },
  {
    path: 'employe-doc/employe-doc-view/:id',
    component: EmpappviewComponent,
  },
  {
    path: 'special',
    component: SpecialEventsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
