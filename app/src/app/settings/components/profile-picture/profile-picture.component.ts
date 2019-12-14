import {
    Component,
    ElementRef,
    OnDestroy,
    OnInit,
    ViewChild,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { untilComponentDestroyed } from 'src/app/@shared/operators';
import { ApiService } from 'src/app/@shared/services/api.service';
import { AuthService } from 'src/app/@shared/services/auth.service';

@Component({
    selector: 'profile-picture',
    templateUrl: './profile-picture.component.html',
    styleUrls: ['./profile-picture.component.scss'],
})
export class ProfilePictureComponent implements OnInit, OnDestroy {
    @ViewChild('fileInput', { static: true }) fileInput: ElementRef;
    public profileImageURL: BehaviorSubject<string>;

    constructor(
        readonly apiService: ApiService,
        readonly authService: AuthService,
    ) {
        this.profileImageURL = new BehaviorSubject('');
        const userInfo = this.authService.userInfo$.getValue();
        const firstName = userInfo.user.firstName;
        const lastName = userInfo.user.lastName;
        if (userInfo && userInfo.user) {
            if (userInfo.user.profileImageURL) {
                this.profileImageURL.next(userInfo.user.profileImageURL);
            } else {
                this.profileImageURL.next(
                    `https://ui-avatars.com/api/?name=${firstName}+${lastName}&size=512&font-size=0.25&bold=true&background=dfdfdf&color=ffffff`,
                );
            }
        }
    }

    ngOnDestroy() {}
    ngOnInit() {}

    triggerFileInput() {
        this.fileInput.nativeElement.click();
    }

    fileUpload() {
        const file = this.fileInput.nativeElement.files[0];
        const formData = new FormData();
        formData.append('file', file);
        this.apiService
            .formData('/user/profile-picture', formData)
            .pipe(untilComponentDestroyed(this))
            .subscribe((v: any) => {
                this.profileImageURL.next(v.profileImageURL);
                this.authService.setProfileImageURL(v.profileImageURL);
            });
    }
}
