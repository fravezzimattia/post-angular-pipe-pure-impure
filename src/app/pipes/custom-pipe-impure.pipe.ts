import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipeImpure',
  pure: false
})
export class CustomPipeImpurePipe implements PipeTransform {
  counter = 0;
  transform(value: string, ...args: unknown[]): unknown {
    return ++this.counter;
  }
}
