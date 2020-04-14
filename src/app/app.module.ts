import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  {RouterModule, Routes} from '@angular/router';
import{FormsModule} from '@angular/forms';
import {EmployeeService}  from './topic-1/employee.service';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './topic-1/list-employees/list-employees.component';
import { CreateEmployeeComponent } from './topic-1/create-employee/create-employee.component';
import { CreateModuleModule } from './topic-1/create-module/create-module.module';
import { LoginComponent } from './topic-1/login/login.component';
import { CreateDirectiveDirective } from './create-directive.directive';
import { DisplayEmployeeComponent } from './topic-3/display-employee/display-employee.component';
import { ComponentLifeCycleComponent } from './topic-4/component-life-cycle/component-life-cycle.component';
import { EmployeeDetailsComponent } from './topic-5/employee-details/employee-details.component';



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
  path:'lifeCycle',
  component:ComponentLifeCycleComponent
},
{
  path:'employee/:id',
  component:EmployeeDetailsComponent
}



];
@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    LoginComponent,
    CreateDirectiveDirective,
    DisplayEmployeeComponent,
    ComponentLifeCycleComponent,
    EmployeeDetailsComponent,
    
    
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
