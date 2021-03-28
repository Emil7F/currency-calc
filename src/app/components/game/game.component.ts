import {Component, OnInit} from '@angular/core';
import {Currency, CurrencyServiceService} from '../services/currency-service.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  messageForUser: string;
  currency: Currency;
  result: string;

  constructor(private currencyService: CurrencyServiceService) {
  }

  ngOnInit(): void {
    this.currencyService.getCurrency().subscribe(value => {
      this.currency = value;
    });
  }

  sayHello(value: string) {
    this.messageForUser = 'Hello ' + value;
  }

  check(value: number) {
    if (value > this.currency.rates.PLN) {
      this.result = 'Your value is too high!';
    } else if (value < this.currency.rates.PLN) {
      this.result = 'Your value is too small!';
    } else {
      this.result = 'You did it!';
    }
  }
}
