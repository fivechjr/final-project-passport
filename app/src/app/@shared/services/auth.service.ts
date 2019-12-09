import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    public userInfo$: BehaviorSubject<any>;
    public test = 'Go';

    constructor(private readonly apiService: ApiService) {
        this.userInfo$ = new BehaviorSubject(null);
    }

    refresh() {
        this.apiService.get('/user').subscribe(v => {
            this.userInfo$.next({ user: v });
        });
    }

    setUserInfo(user: any) {
        this.userInfo$.next(user);
    }
}
