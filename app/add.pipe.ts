import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'add'
})
export class AddPipe implements PipeTransform {

  transform(array: number[]): number {
   let sum: number =0; 
  for(let i=0;i<array.length;i++){  
  sum+= array[i]; 
  }
  return sum;

}
}