import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'example'
})
export class ExamplePipe implements PipeTransform {

  transform(value: number[]): number[] {    
    let res=[];
    for(let i=0;i<value.length;i=i+2){      
      res.push(value[i]);
    }
    return res;
  }

}




