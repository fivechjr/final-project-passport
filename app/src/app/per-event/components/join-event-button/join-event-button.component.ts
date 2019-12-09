import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/@shared/services/auth.service';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from 'src/app/@shared/services/api.service';

@Component({
    selector: 'join-event-button',
    templateUrl: './join-event-button.component.html',
    styleUrls: ['./join-event-button.component.scss'],
})
export class JoinEventButtonComponent implements OnInit {
    @Input() eventID: string;
    @Input() backgroundColor: string;

    public isJoined: BehaviorSubject<boolean>;

    constructor(
        private readonly apiService: ApiService,
        private readonly authService: AuthService,
    ) {
        this.isJoined = new BehaviorSubject(false);
    }

    ngOnInit() {
        this.authService.userInfo$.subscribe(v => {
            console.log(v);
            this.isJoined.next(v.user.events.includes(this.eventID));
        });
    }

    joinEvent() {
        this.apiService.post<any>('/response/' + this.eventID).subscribe(_ => {
            this.authService.refresh();
        });
    }
}
