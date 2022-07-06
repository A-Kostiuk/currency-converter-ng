import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Currency } from '../shared/currency.service';

@Component({
  selector: 'app-currency-options',
  templateUrl: './currency-options.component.html',
  styleUrls: ['./currency-options.component.scss'],
})
export class CurrencyOptionsComponent implements OnInit {

  @Input() id: string = '';
  @Input() currency: Currency[] = [];
  @Input() selectedCurrency: string = '';
  @Output() selectValue = new EventEmitter<string>();

  changeHandler(value: string) {
    this.selectValue.emit(value);
  }

  isSelected(value: string): boolean {
    return this.selectedCurrency === value;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
