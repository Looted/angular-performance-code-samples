import { Component, OnInit, Renderer2, ElementRef, NgZone } from '@angular/core';

@Component({
  selector: 'app-thrasher',
  templateUrl: './thrasher.component.html',
  styleUrls: ['./thrasher.component.scss']
})
export class ThrasherComponent implements OnInit {

  constructor(private ngZone: NgZone, private renderer: Renderer2, private elementRef: ElementRef) { }

  ngOnInit() {
    const width = this.elementRef.nativeElement.clientWidth;
 /* Uncomment below to fix performance issues */
 // this.ngZone.runOutsideAngular(() => { // Without this each callback will cause CD
 //   requestAnimationFrame(() => {
          this.elementRef.nativeElement.style.width = (Number.parseInt(width) * 2) + 'px';
 // Uncomment below to fix performance issues
 //   });
 // });
  }

}
