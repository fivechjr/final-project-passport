import { Component, OnInit } from '@angular/core';
import { ApiService } from '../@shared/services/api.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    private listing$: Observable<any>;
    public today: Date = new Date();
    constructor(private service: ApiService) {}
    ngOnInit() {
        this.listing$ = this.service.get<any>('/event');
    }
}
