import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormat',
})
export class NumberFormatPipe implements PipeTransform {
  transform(
    value: number | bigint,
    option: any = {},
    locale: string = 'en-GB'
  ): string {
    return new Intl.NumberFormat(locale, option).format(value);
  }
}
