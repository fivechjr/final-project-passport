import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';
import { ApiService } from '../@shared/services/api.service';
import { BehaviorSubject, Subject } from 'rxjs';
import {
    debounceTime,
    distinctUntilChanged,
    switchMap,
    takeUntil,
} from 'rxjs/operators';
@Component({
    selector: 'app-search',
    templateUrl: './search.page.html',
    styleUrls: ['./search.page.scss'],
})
export class SearchPage implements AfterViewInit, OnInit {
    public listing$: BehaviorSubject<any>;
    public searchKey: Subject<string> = new Subject();
    public searchModel: string;

    @ViewChild('search', { static: true }) searchElement;

    constructor(private location: Location, private apiService: ApiService) {
        this.listing$ = new BehaviorSubject([]);
    }

    ngOnInit() {
        this.apiService.get<any>('/event/search').subscribe(v => {
            this.listing$.next(v);
        });

        this.searchKey.subscribe(v => console.log);
        this.searchKey
            .pipe(
                debounceTime(300),
                distinctUntilChanged(),
                switchMap(s =>
                    this.apiService
                        .get<any>('/event/search?key=' + s)
                        .pipe(takeUntil(this.searchKey)),
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
