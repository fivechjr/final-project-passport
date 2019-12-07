import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { PerEventPage } from './per-event/per-event.page';
import { HomePageModule } from './home/home.module';
import { PerEventPageModule } from './per-event/per-event.module';

const routes: Routes = [
    {
        path: '',
        // loadChildren: () => import("./home/home.module").then(m => m.HomePageModule),
        component: HomePage,
        pathMatch: 'full',
        data: {
            animation: 'isLeft',
        },
    },
    {
        path: 'per-event',
        // loadChildren: () => import("./per-event/per-event.module").then(m => m.PerEventPageModule),
        component: PerEventPage,
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
        RouterModule.forRoot(routes, {
            preloadingStrategy: PreloadAllModules,
            scrollPositionRestoration: 'enabled',
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
