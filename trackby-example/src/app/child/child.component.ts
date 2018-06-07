import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { transition, style, animate, trigger } from '@angular/animations';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  animations: [
    trigger('appearDissapear', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate(
        '1000ms ease-in-out',
        style({
            opacity: 1
        })
    )
    ]),
    transition(':leave', [
      style({ opacity: 1 }),
      animate(
        '1000ms ease-in-out',
        style({
            opacity: 0
        })
    )
  ])
  ])]
})
export class ChildComponent implements OnInit, OnDestroy {

  @Input() value;
  @Input() fontSize;

  constructor() { }

  ngOnInit() {
    // console.log('I\'m created!');
  }

  ngOnDestroy() {
    // console.log('I\'m destroyed!');
  }

}
