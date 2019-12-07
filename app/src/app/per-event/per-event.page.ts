import { Component, OnInit, HostListener } from '@angular/core';
import { Location } from '@angular/common';
import { Subject, BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-per-event',
    templateUrl: './per-event.page.html',
    styleUrls: ['./per-event.page.scss'],
})
export class PerEventPage implements OnInit {
    public navigationBackground: BehaviorSubject<boolean>;

    @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
        const scrollTop = $event.target.scrollingElement.scrollTop;
        if (scrollTop > 0 && this.navigationBackground.getValue() === false) {
            this.navigationBackground.next(true);
        }

        if (scrollTop === 0 && this.navigationBackground.getValue() === true) {
            this.navigationBackground.next(false);
        }
    }

    constructor(private location: Location) {
        this.navigationBackground = new BehaviorSubject(false);
    }

    ngOnInit() {
        console.log(this.navigationBackground);
    }

    goBack() {
        this.location.back();
    }
}
