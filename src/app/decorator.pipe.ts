import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decorator'
})
export class DecoratorPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
