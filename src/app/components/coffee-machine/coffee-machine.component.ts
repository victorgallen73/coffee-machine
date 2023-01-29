import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Topping } from 'src/app/models/topping.enum';
import { Coffee } from '../../models/coffee';
import { priceList } from '../../data/price-list';

@Component({
  selector: 'app-coffee-machine',
  templateUrl: './coffee-machine.component.html',
  styleUrls: ['./coffee-machine.component.scss']
})
export class CoffeeMachineComponent implements OnInit {

  coffeeForm!: FormGroup;
  toppingsEnum: Array<string> = Object.values(Topping);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }


  private createForm() {
    this.coffeeForm = this.fb.group({
      size: ['', Validators.required],
      type: ['', Validators.required],
      toppings: this.fb.array([]),
    })

    // Add all toppings form groups
    this.createToppingsFormGroup();
  }

  private createToppingsFormGroup(): void {
    this.toppingsEnum.forEach(topping => {
      this.toppings.push(
        this.fb.group({
          name: [topping],
          quantity: 0
        })
      )
    });
  }

  get toppings(): FormArray {
    return this.coffeeForm.controls['toppings'] as FormArray;
  }

  orderCoffee() {
    const coffee = new Coffee(this.coffeeForm.getRawValue());
    coffee.price = this.calculatePrice(coffee);
  }

  /**
   * NOTE: We are not taking into account that prices could not
   * appear in the map in order to avoid adding complexity
  **/
  private calculatePrice(coffee: Coffee): number {
    let toppingsPrice: number = 0;
    let totalAmount: number = 0;

    // Iterate over toppings ordered array and calculate each topping price
    coffee.toppings.forEach( topping => {
      toppingsPrice = toppingsPrice + (topping.quantity * priceList.get(topping.name));
    })

    // Join all prices
    totalAmount = totalAmount + toppingsPrice + priceList.get(coffee.size) + priceList.get(coffee.type);
    return totalAmount;
  }



}
