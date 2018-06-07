import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public sortOrder = true;
  numbers = [1, 2, 3, 4, 5, 6];
  objects = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}];
  objectsImmutable = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}];
  objectsImmutableHuge: Array<{ id: number }> = [];

  public sortFn;

  ngOnInit() {
    for (let i = 1; i < 1000; i++) {
      this.objectsImmutableHuge.push({ id: i });
    }
  }

  reverseSort(array) {
    this.sortOrder
      ? this.sortFn = (a, b) => a instanceof Object ? a.id - b.id : b - a
      : this.sortFn = (a, b) => a instanceof Object ? b.id - a.id : a - b;
      this.sortOrder = !this.sortOrder;
    return array.sort(this.sortFn);
  }

  sortImmutable(array) {
    let sortedArray = this.reverseSort(array);
    sortedArray = sortedArray.map(x => ({ ...x }));
    this.objectsImmutable = sortedArray;
  }

  sortImmutableHuge(array) {
    let sortedArray = this.reverseSort(array);
    sortedArray = sortedArray.map(x => ({ ...x }));
    this.objectsImmutableHuge = sortedArray;
  }

  trackByFn(index, item) {
    return item.id;
  }
}
