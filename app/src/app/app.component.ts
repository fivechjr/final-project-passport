import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { routerTransition } from './animations';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './@shared/services/api.service';
import { AuthService } from './@shared/services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
    animations: [routerTransition],
})
export class AppComponent implements OnInit {
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private service: ApiService,
        private authService: AuthService,
    ) {
        this.initializeApp();
    }

    ngOnInit() {
        const a = this.service.post<any>('/auth', {
            studentID: '6131816721',
            password: 'FiveTest',
        });

        a.subscribe(v => {
            localStorage.setItem('token', v.token);
            this.authService.setUserInfo(v);
        });
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    getState(outlet: RouterOutlet) {
        return (
            outlet &&
            outlet.activatedRouteData &&
            outlet.activatedRouteData.animation
        );
    }
}
