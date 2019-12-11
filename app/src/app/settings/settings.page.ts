import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { untilComponentDestroyed } from '../@shared/operators';
import { AuthService } from '../@shared/services/auth.service';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.page.html',
    styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit, OnDestroy {
    constructor(private authService: AuthService, private router: Router) {}

    ngOnDestroy() {}
    ngOnInit() {}

    go() {
        this.authService.clearUserInfo();
        this.authService.isAuthenticated$
            .pipe(untilComponentDestroyed(this))
            .subscribe(v => {
                if (!v) {
                    this.router.navigate(['/auth']);
                }
            });
    }
}
