import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-cd-default',
  templateUrl: './cd-default.component.html',
  styleUrls: ['./cd-default.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class CdDefaultComponent implements OnInit {

  counter = 0;
  counterInArray = [0];

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.counterInArray[0] += 1;
      this.counter++;
    }, 1000);
  }

}
