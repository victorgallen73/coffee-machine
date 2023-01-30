import { Coffee } from "./coffee";
import { OrderStatus } from "./order-status.enum";

export class Order {
  coffee: Coffee | null;
  refund: number;
  status: OrderStatus | null;

  constructor(order: Partial<Order>) {
    this.coffee = order?.coffee ? order?.coffee :null;
    this.refund = order?.refund ? order?.refund : 0;
    this.status = order?.status ? order?.status : null;
  }

}
