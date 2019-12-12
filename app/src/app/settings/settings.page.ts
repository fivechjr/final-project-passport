import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { untilComponentDestroyed } from '../@shared/operators';
import { AuthService } from '../@shared/services/auth.service';
import { ToastService } from '../@shared/services/toast.service';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.page.html',
    styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit, OnDestroy {
    public displayOnlyFacultyEvents$: FormControl;
    public displayEndedEvents$: FormControl;
    public userInfo$: Observable<any>;
    constructor(
        private authService: AuthService,
        private toastService: ToastService,
        private router: Router,
    ) {
        this.userInfo$ = this.authService.userInfo$;
        this.displayOnlyFacultyEvents$ = new FormControl('');
        this.displayEndedEvents$ = new FormControl('');
    }

    ngOnDestroy() {}
    ngOnInit() {
        this.displayOnlyFacultyEvents$.valueChanges
            .pipe(untilComponentDestroyed(this), debounceTime(300))
            .subscribe(v => this.toastService.showToast('Settings Updated'));

        this.displayEndedEvents$.valueChanges
            .pipe(untilComponentDestroyed(this), debounceTime(300))
            .subscribe(v => this.toastService.showToast('Settings Updated'));
    }

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
