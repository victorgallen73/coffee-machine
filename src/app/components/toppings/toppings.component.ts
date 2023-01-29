import { Component, Input } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { ToppingOrdered } from 'src/app/models/topping-ordered';
import { Topping } from 'src/app/models/topping.enum';

@Component({
  selector: 'app-toppings',
  templateUrl: './toppings.component.html',
  styleUrls: ['./toppings.component.scss']
})
export class ToppingsComponent {
  @Input() form!: FormGroup;

  get toppings(): FormArray {
    return this.form.controls['toppings'] as FormArray;
  }

  updateTopping(index: number, topping: string, isAddition: boolean) {
    const formControl = this.toppings.at(index);
    let quantityUpdated = formControl.value.quantity;

    if (isAddition) {
      quantityUpdated = quantityUpdated + 1;
    } else {
      // Manage if quantity ordered is less than 0
      quantityUpdated = quantityUpdated - 1 < 0 ? 0 : quantityUpdated - 1;
    }
    // Update formControl
    // const newTopping = new ToppingOrdered({ name: topping, quantity: quantityUpdated })
    formControl.get('quantity')?.patchValue(quantityUpdated);
  }

}
