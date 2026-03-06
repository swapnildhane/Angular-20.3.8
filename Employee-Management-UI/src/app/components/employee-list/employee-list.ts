import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from '../../services/employee';

@Component({
  selector: 'employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.scss'
})
export class EmployeeList implements OnInit {

  employees: any[] = [];

  constructor(private Employee: Employee) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees() {
    this.Employee.getEmployees().subscribe({
      next: (data: any[]) => this.employees = data,
      error: (err: any) => console.error(err)
    });
  }
}
