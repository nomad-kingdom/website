import { Pipe, PipeTransform } from '@angular/core';
import { moneyTransform } from '@core/adapters/money';

@Pipe({
  name: 'money'
})
export class MoneyPipe implements PipeTransform {

  transform(value: number, replace: string = ',', to: string = '.'): string {
    return moneyTransform(value, replace, to) ?? '0';
  }

}
