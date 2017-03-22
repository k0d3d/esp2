import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortId'
})
export class ShortIdPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
