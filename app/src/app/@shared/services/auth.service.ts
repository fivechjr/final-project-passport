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
        }

        this.userInfo$.next(userObject);

        if (!this.isAuthenticated$.getValue()) {
            this.isAuthenticated$.next(true);
            this.toastService.showToast(
                'Authenticated as ' + userObject.user.firstName,
            );
        }
    }

    setProfileImageURL(file: string) {
        const userObject = this.userInfo$.getValue();
        userObject.user.profileImageURL = file;
        this.userInfo$.next(userObject);
    }

    clearUserInfo() {
        localStorage.removeItem('token');
        this.userInfo$.next(null);
        this.isAuthenticated$.next(false);
        this.toastService.showToast('Signed Out');
    }
}
