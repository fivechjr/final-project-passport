import { Component, HostListener, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-navigation-bar',
    templateUrl: './navigation-bar.component.html',
    styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnInit {
    @Input() title: string = 'Page';
    @Input() backgroundColor: string = '#ffffff';
    public isElevated = new BehaviorSubject(false);
    @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
        const scrollTop = $event.target.scrollingElement.scrollTop;
        if (scrollTop > 0 && !this.isElevated.getValue()) {
            this.isElevated.next(true);
        }

        if (scrollTop === 0 && this.isElevated.getValue()) {
            this.isElevated.next(false);
        }
    }

    constructor() {}

    ngOnInit() {}
}
