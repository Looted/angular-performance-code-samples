import { Component, AfterViewInit, OnInit, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { flatMap, scan, switchMap } from 'rxjs/operators';
import { from } from 'rxjs/observable/from';
import { asap } from 'rxjs/scheduler/asap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  partying = true;
  readonly partyCollection = Array(15).fill('party');

  data;
  data$: Subject<Array<Object>> = new Subject();
  lazyData$ = this.data$.pipe(
    switchMap(x => from(x, asap).pipe(
      scan((acc, curr) => {
        acc.push(curr);
        return acc;
      }, [])
    )),
  );

  constructor(private cdRef: ChangeDetectorRef) {
    this.lazyData$.subscribe(x => {
      this.data = x;
      this.cdRef.detectChanges();
    });
  }

  ngAfterViewInit() {
    this.loadData();
  }

  loadData(): void {
    const data = [];
    for (let i = 0; i < 2000; i++) {
      data.push({name: 'Some name', surname: 'Some surname'});
    }
    this.data$.next(data);
  }

  partyHard() {
    this.partying = !this.partying;
  }


}
