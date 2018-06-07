import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  numbers = [];

  constructor() {
    for (let i = 0; i < 10000; i ++) {
      this.numbers.push(i);
    }

    setInterval(() => {
      console.log('Interval!');
    }, 1000);
  }

  multiplyAndDivide(value: number, loops: number) {
    for (let i = 1; i < loops; i++) {
      value *= i;
    }
    return value;
  }
}
