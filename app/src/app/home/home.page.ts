import { Component, OnInit } from '@angular/core';
import { ApiService } from '../@shared/services/api.service';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    private listing$: BehaviorSubject<any>;
    public today: Date = new Date();
    constructor(private service: ApiService) {
        this.listing$ = new BehaviorSubject([]);
    }
    ngOnInit() {
        this.service.get<any>('/event').subscribe(v => {
            this.listing$.next(v);
        });
    }
}
