import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    public userInfo$: BehaviorSubject<any>;
    public isAuthenticated$: BehaviorSubject<boolean>;
    public test = 'Go';

    constructor(private readonly apiService: ApiService) {
        this.userInfo$ = new BehaviorSubject(null);
        this.isAuthenticated$ = new BehaviorSubject(false);
    }

    refresh() {
        this.apiService.get('/user').subscribe(v => {
            this.setUserInfo({ user: v });
        });
    }

    setUserInfo(user: any) {
        if (user.token) {
            localStorage.setItem('token', user.token);
        }

        this.userInfo$.next(user);
        this.isAuthenticated$.next(true);
    }
}
