import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../@shared/shared.module';
import { SavedPage } from './saved.page';

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, SharedModule],
    declarations: [SavedPage],
    exports: [SavedPage],
})
export class SavedPageModule {}
