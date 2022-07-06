import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { CurrencyInputComponent } from './currency-input/currency-input.component';
import { CurrencyOptionsComponent } from './currency-options/currency-options.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyInputComponent,
    CurrencyOptionsComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
