import { Component, OnInit, Input } from '@angular/core';
import * as dayjs from 'dayjs';

@Component({
    selector: 'app-horizontal-event-card',
    templateUrl: './horizontal-event-card.component.html',
    styleUrls: ['./horizontal-event-card.component.scss'],
})
export class HorizontalEventCardComponent implements OnInit {
    @Input() posterImage: string;
    @Input() startDate: string;
    @Input() endDate: string;
    @Input() title: string;
    @Input() faculty: string;
    @Input() id: string;

    public isEnded: boolean = false;
    public day: string;
    public month: string;

    constructor() {}

    ngOnInit() {
        let date = dayjs(this.endDate).startOf('day');
        let today = dayjs().startOf('day');
        let diff = today.diff(date, 'day');
        let startDate = dayjs(this.startDate);
        this.day = startDate.format('D');
        this.month = startDate.format('MMM');
        if (date.isBefore(today) && diff >= 1) {
            this.isEnded = true;
        }
    }
}
