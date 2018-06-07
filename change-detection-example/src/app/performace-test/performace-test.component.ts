import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-performace-test',
  templateUrl: './performace-test.component.html',
  styleUrls: ['./performace-test.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class PerformaceTestComponent implements OnInit {

  data = [];

  constructor() {
    for (let i = 0; i < 20000; i++) {
      this.data.push(i);
    }
  }

  ngOnInit() {
  }

}
