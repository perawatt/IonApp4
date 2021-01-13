import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trackerDetail2'
})
export class TrackerDetail2Pipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
