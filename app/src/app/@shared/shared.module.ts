import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { EmptyStateComponent } from './empty-state/empty-state.component';
import { ExpandButtonComponent } from './expand-button/expand-button.component';
import { FrameComponent } from './frame/frame.component';
import { HorizontalEventCardComponent } from './horizontal-event-card/horizontal-event-card.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { FormatDatePipe } from './pipes/format-date.pipe';
import { RelativeTimePipe } from './pipes/relative-time.pipe';
import { ScheduleComponent } from './schedule/schedule.component';
import { ToastService } from './services/toast.service';
import { TabItemComponent } from './tab-item/tab-item.component';
import { ToastComponent } from './toast/toast.component';
import { VerticalEventCardComponent } from './vertical-event-card/vertical-event-card.component';

@NgModule({
    imports: [CommonModule, RouterModule, IonicModule, HttpClientModule],
    providers: [ToastService],
    declarations: [
        ButtonComponent,
        CardComponent,
        EmptyStateComponent,
        ExpandButtonComponent,
        FormatDatePipe,
        FrameComponent,
        HorizontalEventCardComponent,
        NavigationBarComponent,
        PageTitleComponent,
        RelativeTimePipe,
        ScheduleComponent,
        TabItemComponent,
        ToastComponent,
        VerticalEventCardComponent,
    ],
    exports: [
        ButtonComponent,
        CardComponent,
        EmptyStateComponent,
        ExpandButtonComponent,
        FormatDatePipe,
        FrameComponent,
        HorizontalEventCardComponent,
        NavigationBarComponent,
        PageTitleComponent,
        RelativeTimePipe,
        ScheduleComponent,
        TabItemComponent,
        ToastComponent,
        VerticalEventCardComponent,
    ],
})
export class SharedModule {}
