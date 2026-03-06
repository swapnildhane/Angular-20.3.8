import { Component, inject } from '@angular/core';
import { Calculator } from '../Services/Calculator';
@Component({
  selector: 'app-receipt',
  imports: [],
  templateUrl: './receipt.html',
  styleUrl: './receipt.scss',
})
export class Receipt {
  private calculator = inject(Calculator);
  totalCost = this.calculator.add(50, 25);
  totalMul = this.calculator.Mul(12,12);
}
