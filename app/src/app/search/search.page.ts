import { Location } from '@angular/common';
import {
    AfterViewInit,
    Component,
    OnDestroy,
    OnInit,
    ViewChild,
} from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import {
    debounceTime,
    distinctUntilChanged,
    switchMap,
    takeUntil,
} from 'rxjs/operators';
import { untilComponentDestroyed } from '../@shared/operators';
import { ApiService } from '../@shared/services/api.service';
@Component({
    selector: 'app-search',
    templateUrl: './search.page.html',
    styleUrls: ['./search.page.scss'],
})
export class SearchPage implements AfterViewInit, OnInit, OnDestroy {
    public listing$: BehaviorSubject<any>;
    public searchKey: Subject<string> = new Subject();
    public searchModel: string;

    @ViewChild('search', { static: true }) searchElement;

    constructor(private location: Location, private apiService: ApiService) {
        this.listing$ = new BehaviorSubject([]);
    }

    ngOnDestroy() {}
    ngOnInit() {
        this.apiService
            .get<any>('/event/search')
            .pipe(untilComponentDestroyed(this))
            .subscribe(v => {
                this.listing$.next(v);
            });

        this.searchKey.pipe(untilComponentDestroyed(this)).subscribe();
        this.searchKey
            .pipe(
                untilComponentDestroyed(this),
                debounceTime(300),
                distinctUntilChanged(),
                switchMap(s =>
                    this.apiService
                        .get<any>('/event/search?key=' + s)
                        .pipe(
                            takeUntil(this.searchKey),
                            untilComponentDestroyed(this),
                        ),
                ),
            )
            .subscribe(v => {
                this.listing$.next(v);
            });
    }

    ngAfterViewInit() {
        this.searchElement.nativeElement.focus();
    }

    goBack() {
        this.location.back();
    }

    go(event) {
        this.searchKey.next(event);
    }
}
