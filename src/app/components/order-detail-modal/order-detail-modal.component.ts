import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Coffee } from 'src/app/models/coffee';
import { priceList } from '../../data/price-list';
import { interval } from 'rxjs';
import { Order } from '../../models/order';
import { OrderStatus } from 'src/app/models/order-status.enum';

@Component({
  selector: 'app-order-detail-modal',
  templateUrl: './order-detail-modal.component.html',
  styleUrls: ['./order-detail-modal.component.scss']
})
export class OrderDetailModalComponent implements OnInit {

  priceList = priceList;

  showMoneyButtons: boolean = false;
  totalIntroduced: number = 0;
  refund: number = 0;
  isPayButtonDisabled: boolean = true;

  progressBarValue: number = 100;
  curSec: number = 0;
  subscription: any;
  order!: Order;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Coffee,
    private parentDialogRef: MatDialogRef<OrderDetailModalComponent>
    ) {}

  proceedToPayment() {
    this.showMoneyButtons = true;
  }

  incrementAmount(event: any) {
    this.totalIntroduced = this.totalIntroduced + +event.value;

    if (this.totalIntroduced >= this.data?.price) {
      this.isPayButtonDisabled = false;
    }
  }

  ngOnInit(): void {
    this.order = new Order({coffee: this.data, refund: this.refund});
  }

  editOrder() {
   this.order.status = OrderStatus.EDITING;

   this.closeDialog()
  }

  pay() {
    this.refund = this.totalIntroduced - this.data?.price;

    //Update order refund and status
    this.order.refund = this.refund;
    this.order.status = OrderStatus.APPROVED;

    this.startTimer();
  }

  cancelPayment() {
    this.subscription.unsubscribe();
    this.order.status = OrderStatus.CANCELLED;
    this.closeDialog();
  }

  startTimer() {
    const timer$ = interval(1000);

    this.subscription = timer$.subscribe((sec) => {
      this.progressBarValue = 100 - sec * 100 / 10;
      this.curSec = sec;

      if (this.curSec === 10) {
        this.subscription.unsubscribe();
        this.closeDialog();
      }
    });
  }

  closeDialog() {
    this.parentDialogRef.close(this.order);
  }
}
