import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/@shared/services/auth.service';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from 'src/app/@shared/services/api.service';
import { untilComponentDestroyed } from 'src/app/@shared/operators';

@Component({
    selector: 'join-event-button',
    templateUrl: './join-event-button.component.html',
    styleUrls: ['./join-event-button.component.scss'],
})
export class JoinEventButtonComponent implements OnInit, OnDestroy {
    @Input() eventID: string;
    @Input() backgroundColor: string;

    public isJoined: BehaviorSubject<boolean>;

    constructor(
        private readonly apiService: ApiService,
        private readonly authService: AuthService,
    ) {
        this.isJoined = new BehaviorSubject(false);
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
        this.apiService
            .post<any>('/response/' + this.eventID)
            .pipe(untilComponentDestroyed(this))
            .subscribe(_ => {
                this.authService.refresh();
            });
    }
}
