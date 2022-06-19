import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'odd'
})
export class OddPipe implements PipeTransform {

  transform(value: number[]): number[] {
    //write simplyu  your logic to return odd elements
    let res=[];
    for(let i=0;i<value.length;i++){
      if(value[i]%2==1)
      res.push(value[i]);
    }
    return res;
  }

}

