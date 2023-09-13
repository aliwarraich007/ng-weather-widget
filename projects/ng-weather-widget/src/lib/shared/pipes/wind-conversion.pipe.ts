import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'windConversion',
})
export class WindConversion implements PipeTransform {
  transform(value: any, ...args: any[]) {
    if (value === 0) return 'N';
    else if (value > 0 && value < 90) return 'NE';
    else if (value === 90) return 'E';
    else if (value > 90 && value < 180) return 'SE';
    else if (value === 180) return 'S';
    else if (value > 180 && value < 270) return 'SW';
    else if (value === 270) return 'W';
    else return 'NW';
  }
}
