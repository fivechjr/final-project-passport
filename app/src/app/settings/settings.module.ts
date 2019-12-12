import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../@shared/shared.module';
import { CheckComponent } from './components/check/check.component';
import { SettingsPage } from './settings.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        SharedModule,
    ],
    declarations: [SettingsPage, CheckComponent],
    exports: [SettingsPage],
})
export class SettingsPageModule {}
