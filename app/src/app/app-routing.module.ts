import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthPageModule } from './auth/auth.module';
import { AuthPage } from './auth/auth.page';
import { HomePageModule } from './home/home.module';
import { HomePage } from './home/home.page';
import { PerEventPageModule } from './per-event/per-event.module';
import { PerEventPage } from './per-event/per-event.page';
import { RegisterPageModule } from './register/register.module';
import { RegisterPage } from './register/register.page';
import { SavedPageModule } from './saved/saved.module';
import { SavedPage } from './saved/saved.page';
import { SearchPageModule } from './search/search.module';
import { SearchPage } from './search/search.page';
import { SettingsPageModule } from './settings/settings.module';
import { SettingsPage } from './settings/settings.page';
import { WalletPageModule } from './wallet/wallet.module';
import { WalletPage } from './wallet/wallet.page';

const routes: Routes = [
    { path: '', redirectTo: 'auth', pathMatch: 'full' },
    {
        path: 'auth',
        component: AuthPage,
        // pathMatch: 'full',
    },
    {
        path: 'events',
        component: HomePage,
        pathMatch: 'full',
        data: {
            animation: 'isLeft',
        },
    },
    {
        path: 'per-event/:id',
        component: PerEventPage,
        pathMatch: 'full',
        data: {
            animation: 'isRight',
        },
    },
    {
        path: 'search',
        component: SearchPage,
        pathMatch: 'full',
    },
    {
        path: 'saved',
        component: SavedPage,
        pathMatch: 'full',
    },
    {
        path: 'wallet',
        component: WalletPage,
        pathMatch: 'full',
    },
    {
        path: 'settings',
        component: SettingsPage,
        pathMatch: 'full',
    },
    {
        path: 'register',
        component: RegisterPage,
        pathMatch: 'full',
        data: {
            animation: 'isRight',
        },
    },
];

@NgModule({
    imports: [
        HomePageModule,
        PerEventPageModule,
        SearchPageModule,
        SavedPageModule,
        WalletPageModule,
        SettingsPageModule,
        AuthPageModule,
        RegisterPageModule,
        RouterModule.forRoot(routes, {
            preloadingStrategy: PreloadAllModules,
            scrollPositionRestoration: 'enabled',
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
