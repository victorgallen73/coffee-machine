import { Topping } from "./topping.enum";

export class ToppingOrdered {
  name: Topping | string;
  quantity: number;

  constructor(toppingOrdered: ToppingOrdered) {
    this.name = toppingOrdered?.name ? toppingOrdered?.name : '';
    this.quantity = toppingOrdered?.quantity ? toppingOrdered?.quantity : 0;
  }

}
