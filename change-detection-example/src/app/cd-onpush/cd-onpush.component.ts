import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { interval } from 'rxjs/observable/interval';

@Component({
  selector: 'app-cd-onpush',
  templateUrl: './cd-onpush.component.html',
  styleUrls: ['./cd-onpush.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CdOnpushComponent implements OnInit {

  counter = 0;
  counterInArray = [0];

  constructor(private cdRef: ChangeDetectorRef, private zone: NgZone) { }

  ngOnInit() {
    setInterval(() => {
      this.counter += 1;
      this.counterInArray[0] += 1;
     }, 1000);
  }

}
