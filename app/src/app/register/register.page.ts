import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { untilComponentDestroyed } from '../@shared/operators';
import { ApiService } from '../@shared/services/api.service';
import { AuthService } from '../@shared/services/auth.service';
import { ToastService } from '../@shared/services/toast.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit, OnDestroy {
    firstName = new FormControl('');
    lastName = new FormControl('');
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
        this.authService.isAuthenticated$
            .pipe(untilComponentDestroyed(this))
            .subscribe(v => {
                if (v) {
                    this.router.navigate(['/events']);
                }
            });
    }

    go() {
        const timer$ = timer(1000);
        this.apiService
            .post('/user', {
                firstName: this.firstName.value,
                lastName: this.lastName.value,
                studentID: this.studentID.value,
                password: this.password.value,
            })
            .pipe(untilComponentDestroyed(this))
            .subscribe(
                _ => {
                    this.toastService.showToast('Account Created!');
                    timer$.pipe(untilComponentDestroyed(this)).subscribe(_ => {
                        this.router.navigate(['/auth']);
                    });
                },
                e => {
                    this.toastService.showToast(e.error.message);
                },
            );
    }
}
