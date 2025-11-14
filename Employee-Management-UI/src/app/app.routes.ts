import { RouterModule, Routes } from '@angular/router';
import { EmployeeList } from './components/employee-list/employee-list';

import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path:'',
        component:EmployeeList
    }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}
