import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs/observable/interval';
import { publishReplay, map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-change',
  templateUrl: './rxjs-change.component.html',
  styleUrls: ['./rxjs-change.component.scss']
})
export class RxjsChangeComponent implements OnInit {

  counter$ = interval(1000).pipe(map(x => x + 1), startWith(0));

  constructor() { }

  ngOnInit() {
  }

}
