import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';
import { ToastService } from './toast.service';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    public userInfo$: BehaviorSubject<any>;
    public isAuthenticated$: BehaviorSubject<boolean>;
    public test = 'Go';

    constructor(
        private readonly apiService: ApiService,
        private readonly toastService: ToastService,
    ) {
        this.userInfo$ = new BehaviorSubject(null);
        this.isAuthenticated$ = new BehaviorSubject(false);
    }

    refresh() {
        this.apiService.get('/user').subscribe(v => {
            this.setUserInfo({ user: v });
        });
    }

    setUserInfo(userObject: any) {
        if (userObject.token) {
            localStorage.setItem('token', userObject.token);
            this.toastService.showToast(
                'Authenticated as ' + userObject.user.firstName,
            );
        }

        this.userInfo$.next(userObject);
        this.isAuthenticated$.next(true);
    }
}
