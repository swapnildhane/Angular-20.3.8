import { Compiler, CompilerFactory, COMPILER_OPTIONS, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeFormComponent } from './employee-form.component';
import { LoginComponent } from './login.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'employee', component: EmployeeFormComponent }
];

@NgModule({
  imports:      [ BrowserModule, FormsModule
    ,RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, HelloComponent,EmployeeFormComponent,LoginComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    { provide: COMPILER_OPTIONS, useValue: {}, multi: true },
    { provide: CompilerFactory, useClass: JitCompilerFactory, deps: [COMPILER_OPTIONS] },
    { provide: Compiler, useFactory: createCompiler, deps: [CompilerFactory] }
  ]
})
export class AppModule { }

export function createCompiler(compilerFactory: CompilerFactory) {
  return compilerFactory.createCompiler();
}

