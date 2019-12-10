import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ButtonComponent } from './button/button.component';
import { ExpandButtonComponent } from './expand-button/expand-button.component';
import { FrameComponent } from './frame/frame.component';
import { HorizontalEventCardComponent } from './horizontal-event-card/horizontal-event-card.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { FormatDatePipe } from './pipes/format-date.pipe';
import { RelativeTimePipe } from './pipes/relative-time.pipe';
import { ScheduleComponent } from './schedule/schedule.component';
import { ApiService } from './services/api.service';
import { TabItemComponent } from './tab-item/tab-item.component';
import { VerticalEventCardComponent } from './vertical-event-card/vertical-event-card.component';

@NgModule({
    imports: [CommonModule, RouterModule, IonicModule, HttpClientModule],
    providers: [ApiService],
    declarations: [
        ButtonComponent,
        ExpandButtonComponent,
        FrameComponent,
        HorizontalEventCardComponent,
        NavigationBarComponent,
        PageTitleComponent,
        ScheduleComponent,
        VerticalEventCardComponent,
        TabItemComponent,
        FormatDatePipe,
        RelativeTimePipe,
    ],
    exports: [
        ButtonComponent,
        ExpandButtonComponent,
        FrameComponent,
        HorizontalEventCardComponent,
        NavigationBarComponent,
        PageTitleComponent,
        ScheduleComponent,
        VerticalEventCardComponent,
        TabItemComponent,
        FormatDatePipe,
        RelativeTimePipe,
    ],
})
export class SharedModule {}
