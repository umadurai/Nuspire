import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import {EmpSaveService} from './emp-save.service';
import {HttpClientModule} from '@angular/common/http';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {EmpModelModule} from './emp-model/emp-model.module';
import { ListEmpComponent } from './list-emp/list-emp.component';

const appRoutes: Routes = [
  { path: 'list', component: ListEmpComponent },
  { path: 'create', component: EmployeeComponent},
  { path: '', redirectTo: '/create', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ListEmpComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    EmpModelModule,
    RouterModule.forRoot(appRoutes),
    BsDatepickerModule.forRoot()
  ],
  providers: [EmpSaveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
