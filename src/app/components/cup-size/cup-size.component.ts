import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { priceList } from 'src/app/data/price-list';
import { CupSize } from 'src/app/models/cup-size.enum';

@Component({
  selector: 'app-cup-size',
  templateUrl: './cup-size.component.html',
  styleUrls: ['./cup-size.component.scss']
})
export class CupSizeComponent {

  @Input() control!: AbstractControl;

  sizeOptions = Object.values(CupSize);
  disableButtons: boolean = false;

  constructor() { }

  selectSize(event: any) {
    // const keyIndex = Object.values(CupSize).indexOf(event.value);
    // // If keyIndex is -1, the value clicked does not exist on the enum
    // if (keyIndex !== -1 && Object.keys(CupSize)[keyIndex]) {
    //   this.control.patchValue(Object.keys(CupSize)[keyIndex]);
    // }
    this.control.patchValue(event?.value);

    this.disableButtons = true;
  }

}
