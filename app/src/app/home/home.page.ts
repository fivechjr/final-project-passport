import { Component, OnInit } from '@angular/core';
import { HTTPService } from '../@shared/services/http.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    private listing$: Observable<any>;
    public today: Date = new Date();
    constructor(private service: HTTPService) {}
    ngOnInit() {
        this.listing$ = this.service.get<any>('/event');
    }
}
