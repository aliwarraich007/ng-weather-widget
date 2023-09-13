import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dayConversion',
})
export class DayConversion implements PipeTransform {
  transform(value: any, ...args: any[]) {
    const day = new Date(value * 1000).getDay();
    const day_names = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    return new Date().getDay() === day ? 'Today' : day_names[day];
  }
}
