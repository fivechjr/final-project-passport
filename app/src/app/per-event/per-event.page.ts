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
    public fallbackBackground: string = '#3182ce';

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

    toRGB(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result
            ? {
                  r: parseInt(result[1], 16),
                  g: parseInt(result[2], 16),
                  b: parseInt(result[3], 16),
              }
            : null;
    }

    getNavigationBarTextColor(color: string) {
        const { r: a, g: b, b: c } = this.toRGB(color);
        return 150 < a * 0.299 + b * 0.587 + c * 0.114 ? '#000' : '#fff';
    }
}
