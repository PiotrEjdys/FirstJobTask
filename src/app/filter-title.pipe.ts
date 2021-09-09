import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTitle'
})
export class FilterTitlePipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if(value.lenght === 0 || filterString === ''){
      return value;
    }
    const resultArray: string[] = [];
    for(const item of value){
      if(item[propName] === filterString){
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
