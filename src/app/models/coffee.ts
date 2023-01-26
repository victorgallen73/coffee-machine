import { CoffeeType } from "./coffee-type.enum";
import { CupSize } from "./cup-size.enum";
import { Toppings } from "./toppings.enum";

export class Coffee {
  size: CupSize | null;
  type: CoffeeType | null;
  toppings: Toppings[] | null;
  price: number;

  constructor(coffee: Coffee) {
    this.size = coffee?.size ? coffee?.size : null;
    this.type = coffee?.type ? coffee?.type : null;
    this.toppings = coffee?.toppings ? coffee?.toppings : null;
    this.price = coffee?.price ? coffee?.price : 0;
  }

}
