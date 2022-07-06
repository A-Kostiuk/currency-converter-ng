import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-currency-input',
  templateUrl: './currency-input.component.html',
  styleUrls: ['./currency-input.component.scss'],
})
export class CurrencyInputComponent implements OnInit {

  @Input() value: number = 0;
  @Output() inputValue = new EventEmitter<number>();

  inputHandler(value: number) {
    this.inputValue.emit(value);
  }


  constructor() {
  }

  ngOnInit(): void {
  }

}
