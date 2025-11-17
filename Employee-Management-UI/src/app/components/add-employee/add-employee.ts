import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-employee.html',
  styleUrls: ['./add-employee.scss']
})
export class AddEmployee {

  employeeForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      salary: ['', [Validators.required, Validators.min(1000)]],
      department: ['', Validators.required],
    });
  }

  submitForm() {
    console.log('Form submitted!', this.employeeForm.value);
  }

}
