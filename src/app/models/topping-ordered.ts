import { Topping } from "./topping.enum";

export class ToppingOrdered {
  topping: Topping | null;
  quantity: number;

  constructor(toppingOrdered: ToppingOrdered) {
    this.topping = toppingOrdered?.topping ? toppingOrdered?.topping : null;
    this.quantity = toppingOrdered?.quantity ? toppingOrdered?.quantity : 0;
  }

}
