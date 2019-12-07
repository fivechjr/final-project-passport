import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameComponent } from './frame/frame.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [CommonModule, RouterModule, IonicModule],
    declarations: [FrameComponent],
    exports: [FrameComponent],
})
export class SharedModule {}
