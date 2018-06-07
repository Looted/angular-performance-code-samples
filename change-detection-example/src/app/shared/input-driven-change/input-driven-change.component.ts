import { Component, OnInit, Input, SimpleChanges, OnChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-input-driven-change',
  templateUrl: './input-driven-change.component.html',
  styleUrls: ['./input-driven-change.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush // This will stop array based counter
})
export class InputDrivenChangeComponent implements OnInit, OnChanges {

  @Input() input;
  inputType;

  constructor() { }

  ngOnInit() {
    this.inputType = (this.input instanceof Array) ? 'array' : 'primitive';
  }

  ngOnChanges(changes: SimpleChanges) {
  }

}
