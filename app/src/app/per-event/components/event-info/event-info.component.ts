import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'event-info',
    templateUrl: './event-info.component.html',
    styleUrls: ['./event-info.component.scss'],
})
export class EventInfoComponent implements OnInit {
    @Input() title: string = 'Title';
    @Input() subtitle: string = 'Subtitle';
    @Input() icon: string = 'cog';

    constructor() {}

    ngOnInit() {}
}
