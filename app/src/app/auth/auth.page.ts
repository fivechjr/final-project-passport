import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { untilComponentDestroyed } from '../@shared/operators';
import { ApiService } from '../@shared/services/api.service';
import { AuthService } from '../@shared/services/auth.service';
import { ToastService } from '../@shared/services/toast.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.page.html',
    styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit, OnDestroy {
    studentID = new FormControl('');
    password = new FormControl('');

    constructor(
        private readonly apiService: ApiService,
        private readonly authService: AuthService,
        private readonly toastService: ToastService,
        private readonly router: Router,
    ) {}

    ngOnDestroy() {}
    ngOnInit() {
        this.authService.refresh();
        const timer$ = timer(1000);
        this.authService.isAuthenticated$
            .pipe(untilComponentDestroyed(this))
            .subscribe(v => {
                if (v) {
                    timer$.pipe(untilComponentDestroyed(this)).subscribe(_ => {
                        this.router.navigate(['/events']);
                    });
                }
            });
    }
    go() {
        this.apiService
            .post('/auth', {
                studentID: this.studentID.value,
                password: this.password.value,
            })
            .pipe(untilComponentDestroyed(this))
            .subscribe(
                u => {
                    this.authService.setUserInfo(u);
                },
                e => {
                    this.toastService.showToast(e.error.message);
                },
            );
    }
}
