import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './shared/currency.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'currency-converter-ng';

  defaultGiveCurrency = environment.DEFAULT_GIVE_CURRENCY;
  defaultReceiveCurrency = environment.DEFAULT_RECEIVE_CURRENCY;

  getData(url: string): void {
    fetch(url)
      .then(res => res.json())
      .then(result => this.currencyService.setData(result))
      .then(() => this.currencyService.changeGiveInput())
      .then(() => this.isLoaded = true)
      .catch(e => console.log(e.message));
  }

  isLoaded: boolean = false;

  changeGiveInput(value: number) {
    this.currencyService.changeGiveInput(value);
  }

  changeReceiveInput(value: number) {
    this.currencyService.changeReceiveInput(value);
  }

  changeGiveSelect(value: string) {
    this.currencyService.changeGiveSelect(value);
  }

  changeReceiveSelect(value: string) {
    this.currencyService.changeReceiveSelect(value);
  }

  constructor(public currencyService: CurrencyService) {
  }

  ngOnInit(): void {
    this.getData(environment.URL);
  }
}
