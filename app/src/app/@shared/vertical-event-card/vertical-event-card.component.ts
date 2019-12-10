import { Component, Input, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';

@Component({
    selector: 'app-vertical-event-card',
    templateUrl: './vertical-event-card.component.html',
    styleUrls: ['./vertical-event-card.component.scss'],
})
export class VerticalEventCardComponent implements OnInit {
    @Input() posterImage: string;
    @Input() startDate: string;
    @Input() endDate: string;
    @Input() title: string;
    @Input() faculty: string;
    @Input() id: string;

    public isEnded: boolean = false;

    constructor() {}

    ngOnInit() {
        let date = dayjs(this.endDate).startOf('day');
        let today = dayjs().startOf('day');
        let diff = today.diff(date, 'day');
        if (date.isBefore(today) && diff >= 1) {
            this.isEnded = true;
        }
    }
}
