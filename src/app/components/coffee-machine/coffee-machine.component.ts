import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Topping } from 'src/app/models/topping.enum';

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
    this.toppingsEnum.forEach(top => {
      this.toppings.push(
        this.fb.group({
          topping: [top],
          quantity: 0
        })
      )
    });
  }

  get toppings(): FormArray {
    return this.coffeeForm.controls['toppings'] as FormArray;
  }

  orderCoffee() {
    console.log(this.coffeeForm.getRawValue());

  }



}
