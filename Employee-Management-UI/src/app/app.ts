import { Component, signal } from '@angular/core';
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { EmployeeList } from './components/employee-list/employee-list';
import { RouterModule, RouterOutlet } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Footer, EmployeeList, RouterOutlet,RouterModule,ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  title = signal('Employee-Management-UI');
}
