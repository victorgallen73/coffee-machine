import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoffeeMachineComponent } from './components/coffee-machine/coffee-machine.component';
import { CupSizeComponent } from './components/cup-size/cup-size.component';
import { CoffeeTypeComponent } from './components/coffee-type/coffee-type.component';
import { ToppingsComponent } from './components/toppings/toppings.component';

@NgModule({
  declarations: [
    AppComponent,
    CoffeeMachineComponent,
    CupSizeComponent,
    CoffeeTypeComponent,
    ToppingsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
