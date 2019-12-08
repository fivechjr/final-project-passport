import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { PerEventPage } from './per-event/per-event.page';
import { HomePageModule } from './home/home.module';
import { PerEventPageModule } from './per-event/per-event.module';
import { SearchPage } from './search/search.page';
import { SearchPageModule } from './search/search.module';
import { SavedPage } from './saved/saved.page';
import { WalletPage } from './wallet/wallet.page';
import { SavedPageModule } from './saved/saved.module';
import { WalletPageModule } from './wallet/wallet.module';
import { SettingsPage } from './settings/settings.page';
import { SettingsPageModule } from './settings/settings.module';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/events',
        pathMatch: 'full',
    },
    {
        path: 'events',
        // loadChildren: () => import("./home/home.module").then(m => m.HomePageModule),
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
        data: {
            animation: 'isRight',
        },
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
];

@NgModule({
    imports: [
        HomePageModule,
        PerEventPageModule,
        SearchPageModule,
        SavedPageModule,
        WalletPageModule,
        SettingsPageModule,
        RouterModule.forRoot(routes, {
            preloadingStrategy: PreloadAllModules,
            scrollPositionRestoration: 'enabled',
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
