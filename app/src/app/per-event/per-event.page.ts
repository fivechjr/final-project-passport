import { Location } from '@angular/common';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { untilComponentDestroyed } from '../@shared/operators';
import { ApiService } from '../@shared/services/api.service';
import { AuthService } from '../@shared/services/auth.service';
import { getContrastTextColor } from '../@shared/utils';

@Component({
    selector: 'app-per-event',
    templateUrl: './per-event.page.html',
    styleUrls: ['./per-event.page.scss'],
})
export class PerEventPage implements OnInit, OnDestroy {
    public navigationBackground: BehaviorSubject<boolean>;
    public eventID: string;
    public userID$ = new BehaviorSubject(undefined);
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
        this.authService.userInfo$
            .pipe(untilComponentDestroyed(this))
            .subscribe(v => {
                if (v && v.user) {
                    this.userID$.next(v.user.id);
                }
            });
        this.service
            .get<any>('/event/' + this.eventID)
            .pipe(untilComponentDestroyed(this))
            .subscribe(v => {
                this.event$.next(v);
            });
    }

    goBack() {
        this.location.back();
    }

    getNavigationBarTextColor(color: string) {
        return getContrastTextColor(color);
    }

    async addBookmark() {
        this.service
            .post<any>('/user/bookmark/' + this.eventID)
            .pipe(untilComponentDestroyed(this))
            .subscribe();
    }
}
