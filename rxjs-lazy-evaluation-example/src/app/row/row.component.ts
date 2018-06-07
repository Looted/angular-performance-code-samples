import { Component, OnInit, ChangeDetectionStrategy, NgZone } from '@angular/core';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {

  sum = 0;
  color = this.getRandomColor();

  constructor() { }

  ngOnInit() {
    this.sum = this.count();
  }

  count() {
    let counter = 0;
    for (let i = 0; i < 50000; i++) {
      counter += i;
    }
    return counter;
  }

  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

}
