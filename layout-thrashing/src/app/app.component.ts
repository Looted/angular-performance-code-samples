import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  range = [];

  constructor() {

  }

  ngOnInit() {
    for (let i = 0; i < 1000; i++) {
      this.range.push(i);
    }
  }
}
