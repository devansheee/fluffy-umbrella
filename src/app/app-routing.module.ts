import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TdfComponent } from './tdf/tdf.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';


const routes: Routes = [
  //default route & empty path 
  //{path: '', component: EmployeeListComponent},// pathMatch : prefix, full
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'departments', component: DepartmentListComponent},
  {path: 'employees', component: EmployeeListComponent},
  {path:'tdform', component: TdfComponent},
  {path: 'reactive-form', component: ReactiveFormComponent},
  //adding child routes to the department details component.
  {
    path: 'departments/:id', 
    component: DepartmentDetailComponent,
    children:[
      {path: 'overview', component: DepartmentOverviewComponent},
      {path: 'contact', component: DepartmentContactComponent}
    ]
    
  },
  {path: '**', component: PageNotFoundComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepartmentListComponent, 
                                  EmployeeListComponent, 
                                  PageNotFoundComponent, 
                                  DepartmentDetailComponent,
                                  DepartmentOverviewComponent,
                                  DepartmentContactComponent,
                                  TdfComponent,
                                  HomeComponent,
                                  ReactiveFormComponent,
                                ]