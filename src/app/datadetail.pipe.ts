import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datadetail'
})
export class DatadetailPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
