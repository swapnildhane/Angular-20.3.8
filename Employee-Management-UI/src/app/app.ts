import { Component, signal } from '@angular/core';
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { EmployeeList } from './components/employee-list/employee-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ Header, Footer, EmployeeList],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  title = signal('Employee-Management-UI');
}
