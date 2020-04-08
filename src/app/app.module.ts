import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  {RouterModule, Routes} from '@angular/router';
import{FormsModule} from '@angular/forms';
import {EmployeeService}  from './topic-1/employee.service';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './topic-1/list-employees/list-employees.component';
import { CreateEmployeeComponent } from './topic-2/create-employee/create-employee.component';
import { CreateModuleModule } from './create-module/create-module.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { CreateDirectiveDirective } from './create-directive.directive';

const appRoutes: Routes=[
{
  path:'list',
  component: ListEmployeesComponent
},
{
  path: 'create',
  component:CreateEmployeeComponent
},
{
  path:'',
  redirectTo: '/login',
  pathMatch: 'full'
},
{
  path: 'login',
  component:LoginComponent
},
{
  path: 'register',
  component:RegisterComponent
},
{
  path: 'events',
  component:EventsComponent
},
{
  path: 'special',
  component:SpecialEventsComponent
},

];
@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    RegisterComponent,
    LoginComponent,
    EventsComponent,
    SpecialEventsComponent,
    CreateDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    CreateModuleModule,
    
    
  ],
  providers: [EmployeeService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
