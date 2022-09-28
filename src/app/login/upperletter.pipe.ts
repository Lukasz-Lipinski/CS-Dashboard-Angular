import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'upperletter',
})
export class Upperletter implements PipeTransform {
  transform(value: string): string {
    const firstLetter = value[0].toUpperCase();

    return firstLetter + value.substring(1, value.length).toLowerCase();
  }
}
