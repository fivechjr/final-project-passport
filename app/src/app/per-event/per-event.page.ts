import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../@shared/services/api.service';
import { AuthService } from '../@shared/services/auth.service';
import { untilComponentDestroyed } from '../@shared/operators';

@Component({
    selector: 'app-per-event',
    templateUrl: './per-event.page.html',
    styleUrls: ['./per-event.page.scss'],
})
export class PerEventPage implements OnInit, OnDestroy {
    public navigationBackground: BehaviorSubject<boolean>;
    public eventID: string;
    public event$: Subject<any> = new Subject();
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

    constructor(
        private location: Location,
        private route: ActivatedRoute,
        private service: ApiService,
        private authService: AuthService,
    ) {
        this.navigationBackground = new BehaviorSubject(false);
    }

    ngOnDestroy() {}
    ngOnInit() {
        this.eventID = this.route.snapshot.paramMap.get('id');
        this.service.get<any>('/event/' + this.eventID).subscribe(v => {
            this.event$.next(v);
        });

        if (!this.authService.isAuthenticated$.getValue()) {
            this.authService.refresh();
        }
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

    async addBookmark() {
        this.service.post<any>('/user/bookmark/' + this.eventID).subscribe();
    }
}
