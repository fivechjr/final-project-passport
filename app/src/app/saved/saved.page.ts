import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../@shared/services/api.service';
import { BehaviorSubject } from 'rxjs';
import { untilComponentDestroyed } from '../@shared/operators';

@Component({
    selector: 'app-saved',
    templateUrl: './saved.page.html',
    styleUrls: ['./saved.page.scss'],
})
export class SavedPage implements OnInit, OnDestroy {
    private listing$: BehaviorSubject<any>;

    constructor(private apiService: ApiService) {
        this.listing$ = new BehaviorSubject([]);
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
