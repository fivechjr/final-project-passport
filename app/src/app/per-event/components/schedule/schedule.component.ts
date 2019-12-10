import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'schedule',
    templateUrl: './schedule.component.html',
    styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {
    @Input() data: any;

    constructor() {}

    ngOnInit() {}
}
