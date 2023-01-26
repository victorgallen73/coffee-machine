import { Component, OnInit } from '@angular/core';
import { Toppings } from 'src/app/models/toppings.enum';

@Component({
  selector: 'app-toppings',
  templateUrl: './toppings.component.html',
  styleUrls: ['./toppings.component.scss']
})
export class ToppingsComponent implements OnInit {

  toppings: string[] = Object.values(Toppings);

  constructor() { }

  ngOnInit(): void {
  }

}
