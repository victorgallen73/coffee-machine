import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSnackBarModule} from '@angular/material/snack-bar';



import { CoffeeMachineComponent } from './components/coffee-machine/coffee-machine.component';
import { CupSizeComponent } from './components/cup-size/cup-size.component';
import { CoffeeTypeComponent } from './components/coffee-type/coffee-type.component';
import { ToppingsComponent } from './components/toppings/toppings.component';
import { OrderDetailModalComponent } from './components/order-detail-modal/order-detail-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    CupSizeComponent,
    CoffeeMachineComponent,
    CoffeeTypeComponent,
    ToppingsComponent,
    OrderDetailModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatProgressBarModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
