import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from '../@shared/services/api.service';

@Component({
    selector: 'app-wallet',
    templateUrl: './wallet.page.html',
    styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {
    private listing$: BehaviorSubject<any>;

    constructor(private apiService: ApiService) {
        this.listing$ = new BehaviorSubject([]);
    }

    ngOnInit() {
        this.apiService.get<any>('/user/event').subscribe(v => {
            this.listing$.next(v.events);
        });
    }
}
