import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'app-per-event',
    templateUrl: './per-event.page.html',
    styleUrls: ['./per-event.page.scss'],
})
export class PerEventPage implements OnInit {
    constructor(private location: Location) {}

    ngOnInit() {}

    goBack() {
        this.location.back();
    }
}
