import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../@shared/services/auth.service';
import { ApiService } from '../@shared/services/api.service';
import { untilComponentDestroyed } from '../@shared/operators';

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
        this.apiService
            .post('/user', {
                firstName: this.firstName.value,
                lastName: this.lastName.value,
                studentID: this.studentID.value,
                password: this.password.value,
            })
            .pipe(untilComponentDestroyed(this))
            .subscribe(_ => {
                this.router.navigate(['/auth']);
            });
    }
}
