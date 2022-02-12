import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg?: any): any {
    if (arg === '' || arg.length < 1) return value;
    const resultPais = [];
    for (const pais of value) {
      if (pais.name.common.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPais.push(pais);
      };
    };
    return resultPais;
  }

}
