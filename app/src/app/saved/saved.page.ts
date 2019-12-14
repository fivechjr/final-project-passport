import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { untilComponentDestroyed } from '../@shared/operators';
import { ApiService } from '../@shared/services/api.service';

@Component({
    selector: 'app-saved',
    templateUrl: './saved.page.html',
    styleUrls: ['./saved.page.scss'],
})
export class SavedPage implements OnInit, OnDestroy {
    private listing$: BehaviorSubject<any>;

    constructor(private apiService: ApiService) {
        this.listing$ = new BehaviorSubject(undefined);
    }

    ngOnDestroy() {}
    ngOnInit() {
        this.apiService
            .get<any>('/user/bookmark')
            .pipe(untilComponentDestroyed(this))
            .subscribe(v => {
                this.listing$.next(v.bookmarks);
            });
    }
}
