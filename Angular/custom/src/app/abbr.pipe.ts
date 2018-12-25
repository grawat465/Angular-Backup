import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abbr'
})
export class AbbrPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    var temp=value.split(' ');
    var result="";
    for(let i=0;i<temp.length-1;i++)
    {
       result+=temp[i].charAt(0)+" . ";
    }
    result+=temp[temp.length-1];

    return  result;
      }
  

}
