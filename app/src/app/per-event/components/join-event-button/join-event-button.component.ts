import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { untilComponentDestroyed } from 'src/app/@shared/operators';
import { ApiService } from 'src/app/@shared/services/api.service';
import { AuthService } from 'src/app/@shared/services/auth.service';
import { ToastService } from 'src/app/@shared/services/toast.service';

@Component({
    selector: 'join-event-button',
    templateUrl: './join-event-button.component.html',
    styleUrls: ['./join-event-button.component.scss'],
})
export class JoinEventButtonComponent implements OnInit, OnDestroy {
    @Input() eventID: string;
    @Input() backgroundColor: string;

    public isJoined: BehaviorSubject<boolean>;
    public isMakingRequest: BehaviorSubject<boolean>;

    constructor(
        private readonly apiService: ApiService,
        private readonly authService: AuthService,
        private readonly toastService: ToastService,
    ) {
        this.isJoined = new BehaviorSubject(false);
        this.isMakingRequest = new BehaviorSubject(false);
    }

    ngOnDestroy() {}
    ngOnInit() {
        this.authService.userInfo$
            .pipe(untilComponentDestroyed(this))
            .subscribe(v => {
                if (v && v.user) {
                    this.isJoined.next(v.user.events.includes(this.eventID));
                }
            });
    }

    joinEvent() {
        this.isMakingRequest.next(true);
        this.apiService
            .post<any>('/response/' + this.eventID)
            .pipe(untilComponentDestroyed(this))
            .subscribe(_ => {
                this.isMakingRequest.next(false);
                this.authService.refresh();
                this.toastService.showToast('Registration Completed');
            });
    }
}
