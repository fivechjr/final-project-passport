import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerEventPage } from './per-event.page';

const routes: Routes = [
    {
        path: '',
        component: PerEventPage,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PerEventPageRoutingModule {}
