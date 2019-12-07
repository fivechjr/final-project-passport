import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerEventPageRoutingModule } from './per-event-routing.module';

import { PerEventPage } from './per-event.page';
import { SharedModule } from '../@shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PerEventPageRoutingModule,
        SharedModule,
    ],
    declarations: [PerEventPage],
    exports: [PerEventPage],
})
export class PerEventPageModule {}
