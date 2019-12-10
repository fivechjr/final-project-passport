import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../@shared/shared.module';
import { SettingsPage } from './settings.page';

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, SharedModule],
    declarations: [SettingsPage],
    exports: [SettingsPage],
})
export class SettingsPageModule {}
