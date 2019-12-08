import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'relativeTime',
})
export class RelativeTimePipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        let today = new Date();
        today.setHours(0, 0, 0, 0);
        let day = new Date(value);
        let diff = (day.getTime() - today.getTime()) / (1000 * 3600 * 24);
        // @ts-ignore
        const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
        return String(rtf.format(diff, 'day')).toUpperCase();
    }
}
