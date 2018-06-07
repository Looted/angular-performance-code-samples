import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, NgZone } from '@angular/core';

@Component({
  selector: 'app-internal-change',
  templateUrl: './internal-change.component.html',
  styleUrls: ['./internal-change.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush // This will stop the counter
})
export class InternalChangeComponent implements OnInit {

  public counter = 0;

  constructor(private cdRef: ChangeDetectorRef, private ngZone: NgZone) { }

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
    setInterval(() => {
      this.counter += 1;
      // this.cdRef.detectChanges(); // This will force change detection on this component and it's children
      // this.cdRef.markForCheck(); // This will include this component and it's ancestors in the next CD cycle
     }, 999);
    });

  }

}
