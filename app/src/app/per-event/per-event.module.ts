import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerEventPageRoutingModule } from './per-event-routing.module';

import { PerEventPage } from './per-event.page';
import { SharedModule } from '../@shared/shared.module';
import { SectionTextComponent } from './components/section-text/section-text.component';
import { EventInfoComponent } from './components/event-info/event-info.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { JoinEventButtonComponent } from './components/join-event-button/join-event-button.component';
import { SaveEventButtonComponent } from './components/save-event-button/save-event-button.component';

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, SharedModule],
    declarations: [
        PerEventPage,
        SectionTextComponent,
        EventInfoComponent,
        ScheduleComponent,
        JoinEventButtonComponent,
        SaveEventButtonComponent,
    ],
    exports: [PerEventPage],
})
export class PerEventPageModule {}
