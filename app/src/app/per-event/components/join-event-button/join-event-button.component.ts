import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import QRCode from 'qrcode';
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
    @Input() endDate: string;

    public isJoined: BehaviorSubject<boolean>;
    public isMakingRequest: BehaviorSubject<boolean>;
    public isAfter = false;
    public userID$ = new BehaviorSubject(undefined);
    public QR = new BehaviorSubject('');

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
        this.isAfter = dayjs().isAfter(dayjs(this.endDate));
        this.authService.userInfo$
            .pipe(untilComponentDestroyed(this))
            .subscribe(v => {
                if (v && v.user) {
                    this.isJoined.next(v.user.events.includes(this.eventID));
                    this.userID$.next(v.user._id);
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

    async generate() {
        const QR = await QRCode.toDataURL(
            this.userID$.getValue() + ':' + this.eventID,
            { margin: 4, quality: 1, width: 500, scale: 10 },
        );
        this.QR.next(QR);
    }
}
