import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerEventPageRoutingModule } from './per-event-routing.module';

import { PerEventPage } from './per-event.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PerEventPageRoutingModule,
    ],
    declarations: [PerEventPage],
    exports: [PerEventPage],
})
export class PerEventPageModule {}
