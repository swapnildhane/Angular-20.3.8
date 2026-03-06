import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {

  employee = {
    name: '',
    email: '',
    mobile: '',
    department: '',
    salary: null
  };

  message: string = '';

  save() {

    // Basic validation
    if (!this.employee.name || !this.employee.email) {
      this.message = 'Please fill required fields ❌';
      return;
    }

    console.log('Employee Saved:', this.employee);

    this.message = 'Employee Saved Successfully ✅';
  }

  reset() {
    this.employee = {
      name: '',
      email: '',
      mobile: '',
      department: '',
      salary: null
    };

    this.message = '';
  }
}