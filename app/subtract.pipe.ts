import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subtract'
})
export class SubtractPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}