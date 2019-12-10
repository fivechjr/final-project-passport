import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { untilComponentDestroyed } from '../@shared/operators';
import { ApiService } from '../@shared/services/api.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
    private listing$: BehaviorSubject<any>;
    public today: Date = new Date();
    constructor(private service: ApiService) {
        this.listing$ = new BehaviorSubject([]);
    }
    ngOnDestroy() {}
    ngOnInit() {
        this.service
            .get<any>('/event')
            .pipe(untilComponentDestroyed(this))
            .subscribe(v => {
                this.listing$.next(v);
            });
    }
}
