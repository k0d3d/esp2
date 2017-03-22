import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortId'
})
export class ShortIdPipe implements PipeTransform {

  transform(id: any, args?: any): any {
    if (id && id.length) {
      return id.substring(4, -1);
    } else {
      return '';
    }
  }

}
