import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-coffee-machine',
  templateUrl: './coffee-machine.component.html',
  styleUrls: ['./coffee-machine.component.scss']
})
export class CoffeeMachineComponent implements OnInit {

  coffeeForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }


  private createForm() {
    this.coffeeForm = this.fb.group({
      size: ['', Validators.required],
      type: ['', Validators.required],
      toppings: this.fb.array([
        this.fb.control('')
      ]),
    })
  }

  get toppings() {
    return this.coffeeForm.controls['toppings'] as FormArray;
  }

  orderCoffee() {

  }



}
