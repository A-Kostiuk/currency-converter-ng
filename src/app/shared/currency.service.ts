import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

export interface Currency {
  r030: number;
  txt: string;
  rate: number;
  cc: string;
  exchangedate: string;
}

interface Rate {
  rateGive: any;
  rateReceive: any;
}

@Injectable({providedIn: 'root'})
export class CurrencyService {
  public currency: Currency[] = [];

  setData(arr: Currency[]) {
    this.currency = [...arr, environment.BASE_CURRENCY];
  }

  changeGiveInput(value: number = this.inputGive): void {
    this.inputGive = value;
    const rates = this.findRates();
    this.inputReceive = Number((value * rates.rateGive / rates.rateReceive).toFixed(2));
  }

  changeReceiveInput(value: number): void {
    this.inputReceive = value;
    const rates = this.findRates();
    this.inputGive = Number((value * rates.rateReceive / rates.rateGive).toFixed(2));
  }

  changeGiveSelect(value: string): void {
    this.selectGive = value;
    const rates = this.findRates(value);
    this.inputReceive = Number((this.inputGive * rates.rateGive / rates.rateReceive).toFixed(2));
  }

  changeReceiveSelect(value: string): void {
    this.selectReceive = value;
    const rates = this.findRates(this.selectGive, value);
    this.inputReceive = Number((this.inputGive * rates.rateGive / rates.rateReceive).toFixed(2));
  }

  findRates(selectGive: string = this.selectGive, selectReceive: string = this.selectReceive): Rate {
    const rateGive = this.currency.find(item => item.cc === selectGive)?.rate;
    const rateReceive = this.currency.find(item => item.cc === selectReceive)?.rate;
    return {
      rateGive: rateGive,
      rateReceive: rateReceive,
    };
  }

  inputGive: number = 10;
  selectGive: string = environment.DEFAULT_GIVE_CURRENCY;
  inputReceive: number = 0;
  selectReceive: string = environment.DEFAULT_RECEIVE_CURRENCY;
}
