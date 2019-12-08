import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs';

@Pipe({
    name: 'formatDate',
})
export class FormatDatePipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        return dayjs(value).format('ddd, D MMM YYYY');
    }
}
