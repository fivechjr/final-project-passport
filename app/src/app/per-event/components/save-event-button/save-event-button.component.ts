import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from 'src/app/@shared/services/api.service';
import { AuthService } from 'src/app/@shared/services/auth.service';

@Component({
    selector: 'save-event-button',
    templateUrl: './save-event-button.component.html',
    styleUrls: ['./save-event-button.component.scss'],
})
export class SaveEventButtonComponent implements OnInit {
    @Input() eventID: string;

    public isBookmarked: BehaviorSubject<boolean>;

    constructor(
        private readonly apiService: ApiService,
        private readonly authService: AuthService,
    ) {
        this.isBookmarked = new BehaviorSubject(false);
    }

    ngOnInit() {
        this.authService.userInfo$.subscribe(v => {
            // console.log(v);
            this.isBookmarked.next(v.user.bookmarks.includes(this.eventID));
        });
    }

    addBookmark() {
        this.apiService
            .post<any>('/user/bookmark/' + this.eventID)
            .subscribe(_ => {
                this.authService.refresh();
            });
    }

    removeBookmark() {
        this.apiService
            .delete<any>('/user/bookmark/' + this.eventID)
            .subscribe(_ => {
                this.authService.refresh();
            });
    }
}
