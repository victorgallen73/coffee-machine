import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Topping } from 'src/app/models/topping.enum';
import { Coffee } from '../../models/coffee';
import { priceList } from '../../data/price-list';
import { MatDialog } from '@angular/material/dialog';
import { OrderDetailModalComponent } from '../order-detail-modal/order-detail-modal.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Order } from '../../models/order';
import { OrderStatus } from 'src/app/models/order-status.enum';

@Component({
  selector: 'app-coffee-machine',
  templateUrl: './coffee-machine.component.html',
  styleUrls: ['./coffee-machine.component.scss']
})
export class CoffeeMachineComponent implements OnInit {

  coffeeForm!: FormGroup;
  toppingsEnum: Array<string> = Object.values(Topping);
  childDialogRef: any;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) { }

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
    this.toppingsEnum.forEach(topping => {
      this.toppings.push(
        this.fb.group({
          name: [topping],
          quantity: 0
        })
      )
    });
  }

  get toppings(): FormArray {
    return this.coffeeForm.controls['toppings'] as FormArray;
  }

  orderCoffee() {
    let coffee = new Coffee(this.coffeeForm.getRawValue());
    coffee.price = this.calculatePrice(coffee);
    coffee.orderId = this.generateRandomOrderId();
    this.openDialog(coffee);
  }

  /**
   * NOTE: We are not taking into account that prices could not
   * appear in the map in order to avoid adding complexity
  **/
  private calculatePrice(coffee: Coffee): number {
    let toppingsPrice: number = 0;
    let totalAmount: number = 0;

    // Iterate over toppings ordered array and calculate each topping price
    coffee.toppings.forEach( topping => {
      toppingsPrice = toppingsPrice + (topping.quantity * priceList.get(topping.name));
    })

    // Join all prices
    totalAmount = totalAmount + toppingsPrice + priceList.get(coffee.size) + priceList.get(coffee.type);
    return totalAmount;
  }

  private generateRandomOrderId(): string {
    const dateStr = Date
      .now()
      .toString(36); // convert num to base 36 and stringify

    const randomStr = Math
      .random()
      .toString(36)
      .substring(2, 8); // start at index 2 to skip decimal point

    return `${dateStr}-${randomStr}`;
  }

  private openDialog(coffee: Coffee) {
    this.childDialogRef = this.dialog.open(OrderDetailModalComponent, {
      data: coffee,
      height: '500px',
      width: '400px',
    });
    this.childDialogRef.afterClosed().subscribe((order: Order) => {
      this.childDialogRef = null;
      if (order.status === OrderStatus.CANCELLED) {
        this.openSnackBar('Order #' + order?.coffee?.orderId + ' has been canceled')
      } else {
        this.openSnackBar('Order #' + order?.coffee?.orderId + ' is being prepared')
      }
    });
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'OK',{duration: 5000});
  }

}
