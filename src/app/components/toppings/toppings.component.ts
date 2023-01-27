import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Topping } from 'src/app/models/topping.enum';

@Component({
  selector: 'app-toppings',
  templateUrl: './toppings.component.html',
  styleUrls: ['./toppings.component.scss']
})
export class ToppingsComponent {
  @Input() control!: AbstractControl;

  toppings: string[] = Object.values(Topping);

  constructor() { }

}
