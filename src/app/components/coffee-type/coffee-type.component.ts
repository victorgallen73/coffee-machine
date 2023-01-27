import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { CoffeeType } from 'src/app/models/coffee-type.enum';

@Component({
  selector: 'app-coffee-type',
  templateUrl: './coffee-type.component.html',
  styleUrls: ['./coffee-type.component.scss']
})
export class CoffeeTypeComponent implements OnInit {

  @Input() control!: AbstractControl;

  coffeeTypeOptions = Object.values(CoffeeType);

  constructor() { }

  ngOnInit(): void {
  }

  selectCoffeeType(event: any) {
    this.control.patchValue(event?.value);
  }

}
