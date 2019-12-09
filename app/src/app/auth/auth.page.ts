import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from '../@shared/services/api.service';
import { AuthService } from '../@shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.page.html',
    styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
    studentID = new FormControl('');
    password = new FormControl('');

    constructor(
        private readonly apiService: ApiService,
        private readonly authService: AuthService,
        private readonly router: Router,
    ) {}
    ngOnInit() {
        this.authService.refresh();
        this.authService.isAuthenticated$.subscribe(v => {
            if (v) {
                this.router.navigate(['/events']);
            }
        });
    }
    go() {
        this.apiService
            .post('/auth', {
                studentID: this.studentID.value,
                password: this.password.value,
            })
            .subscribe(v => {
                this.authService.setUserInfo(v);
            });
    }
}
