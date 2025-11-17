import { RouterModule, Routes } from '@angular/router';
import { EmployeeList } from './components/employee-list/employee-list';

import { NgModule } from '@angular/core';
import { AddEmployee } from './components/add-employee/add-employee';
import { EditEmployee } from './components/edit-employee/edit-employee';

export const routes: Routes = [
    {
        path:'',
        component:EmployeeList
    },
     { path: 'employees', component: EmployeeList }, // list page
  { path: 'employees/add', component: AddEmployee }, // add page
  { path: 'employees/edit/:id', component: EditEmployee } // edit page
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}
