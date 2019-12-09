import { Component, OnInit } from '@angular/core';
import { ApiService } from '../@shared/services/api.service';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-saved',
    templateUrl: './saved.page.html',
    styleUrls: ['./saved.page.scss'],
})
export class SavedPage implements OnInit {
    private listing$: BehaviorSubject<any>;

    constructor(private apiService: ApiService) {
        this.listing$ = new BehaviorSubject([]);
    }

    ngOnInit() {
        this.apiService.get<any>('/user/bookmark').subscribe(v => {
            this.listing$.next(v.bookmarks);
        });
    }
}
