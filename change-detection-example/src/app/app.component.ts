import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  counter = 0;
  partying = false;
  readonly partyCollection = Array(15).fill('party');

  constructor() { }

  ngOnInit() {
    // setInterval(() => this.counter += 1, 1000);
  }

  partyHard() {
    this.partying = !this.partying;
  }
}
