import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipePure',
  pure: true
})
export class CustomPipePurePipe implements PipeTransform {
  counter = 0;
  transform(value: string, ...args: unknown[]): unknown {
    return ++this.counter;
  }
}
