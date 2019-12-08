import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameComponent } from './frame/frame.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { ExpandButtonComponent } from './expand-button/expand-button.component';
import { HorizontalEventCardComponent } from './horizontal-event-card/horizontal-event-card.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { VerticalEventCardComponent } from './vertical-event-card/vertical-event-card.component';
import { TabItemComponent } from './tab-item/tab-item.component';
import { APIService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { RelativeTimePipe } from './pipes/relative-time.pipe';

@NgModule({
    imports: [CommonModule, RouterModule, IonicModule, HttpClientModule],
    providers: [APIService],
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
    ],
})
export class SharedModule {}
