import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplyAndDivide',
  pure: true
})
export class MultiplyAndDividePipe implements PipeTransform {

  transform(value: number, loops: number): any {
    for (let i = 1; i < loops; i++) {
      value *= i;
    }
    return value;
  }

}
