import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { untilComponentDestroyed } from '../@shared/operators';
import { ApiService } from '../@shared/services/api.service';
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
        private apiService: ApiService,
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
            .pipe(
                untilComponentDestroyed(this),
                debounceTime(300),
                distinctUntilChanged(),
            )
            .subscribe(v => {
                this.updateContentPreference('FACULTY_EVENTS', v);
            });

        this.displayEndedEvents$.valueChanges
            .pipe(
                untilComponentDestroyed(this),
                debounceTime(300),
                distinctUntilChanged(),
            )
            .subscribe(v => {
                this.updateContentPreference('ENDED_EVENTS', v);
            });

        this.authService.userInfo$
            .pipe(
                untilComponentDestroyed(this),
                distinctUntilChanged((prev, curr) => {
                    if (!curr) return false;
                    return (
                        prev.user.contentPreferences ===
                        curr.user.contentPreferences
                    );
                }),
            )
            .subscribe(v => {
                if (v && v.user) {
                    const FACULTY_EVENTS = !!v.user.contentPreferences.find(
                        x => x.key === 'FACULTY_EVENTS',
                    ).value;

                    const ENDED_EVENTS = !!v.user.contentPreferences.find(
                        x => x.key === 'ENDED_EVENTS',
                    ).value;

                    this.displayOnlyFacultyEvents$.setValue(FACULTY_EVENTS, {
                        emitEvent: false,
                        onlySelf: true,
                    });

                    this.displayEndedEvents$.setValue(ENDED_EVENTS, {
                        emitEvent: false,
                        onlySelf: true,
                    });
                }
            });
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

    updateContentPreference(key: string, value: string) {
        this.apiService
            .post<any>('/user/content-preference', { key, value })
            .pipe(untilComponentDestroyed(this))
            .subscribe(v => {
                this.authService.setUserInfo({ user: v });
                this.toastService.showToast('Content Preference Updated');
            });
    }
}
