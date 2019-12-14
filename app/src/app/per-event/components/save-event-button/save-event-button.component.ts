import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { untilComponentDestroyed } from 'src/app/@shared/operators';
import { ApiService } from 'src/app/@shared/services/api.service';
import { AuthService } from 'src/app/@shared/services/auth.service';
import { ToastService } from 'src/app/@shared/services/toast.service';

@Component({
    selector: 'save-event-button',
    templateUrl: './save-event-button.component.html',
    styleUrls: ['./save-event-button.component.scss'],
})
export class SaveEventButtonComponent implements OnInit, OnDestroy {
    @Input() eventID: string;

    public isBookmarked: BehaviorSubject<boolean>;
    public isMakingRequest: BehaviorSubject<boolean>;

    constructor(
        private readonly apiService: ApiService,
        private readonly authService: AuthService,
        private readonly toastService: ToastService,
    ) {
        this.isBookmarked = new BehaviorSubject(false);
        this.isMakingRequest = new BehaviorSubject(false);
    }

    ngOnDestroy() {}
    ngOnInit() {
        this.authService.userInfo$
            .pipe(untilComponentDestroyed(this))
            .subscribe(v => {
                if (v && v.user) {
                    this.isBookmarked.next(
                        v.user.bookmarks.includes(this.eventID),
                    );
                    this.isMakingRequest.next(false);
                }
            });
    }

    addBookmark() {
        this.isMakingRequest.next(true);
        this.apiService
            .post<any>('/user/bookmark/' + this.eventID)
            .pipe(untilComponentDestroyed(this))
            .subscribe(_ => {
                this.authService.refresh();
                this.toastService.showToast('Event Saved');
            });
    }

    removeBookmark() {
        this.isMakingRequest.next(true);
        this.apiService
            .delete<any>('/user/bookmark/' + this.eventID)
            .pipe(untilComponentDestroyed(this))
            .subscribe(_ => {
                this.authService.refresh();
                this.toastService.showToast('Event Removed');
            });
    }
}
