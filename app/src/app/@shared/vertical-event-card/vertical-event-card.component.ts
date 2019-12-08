import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-vertical-event-card',
    templateUrl: './vertical-event-card.component.html',
    styleUrls: ['./vertical-event-card.component.scss'],
})
export class VerticalEventCardComponent implements OnInit {
    @Input() posterImage: string;
    @Input() date: string;
    @Input() title: string;
    @Input() faculty: string;
    @Input() id: string;
    constructor() {}

    ngOnInit() {}
}
