import { CoffeeType } from "./coffee-type.enum";
import { CupSize } from "./cup-size.enum";
import { ToppingOrdered } from "./topping-ordered";

export class Coffee {
  orderId: string;
  size: CupSize;
  type: CoffeeType;
  toppings: ToppingOrdered[];
  price: number;

  constructor(coffee: Coffee) {
    this.orderId = coffee?.orderId ? coffee?.orderId : '';
    this.size = coffee?.size ? coffee?.size : CupSize.SMALL;
    this.type = coffee?.type ? coffee?.type : CoffeeType.COLUMBIAN;
    this.toppings = coffee?.toppings ? coffee?.toppings : [];
    this.price = coffee?.price ? coffee?.price : 0;
  }

}
