import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SavedPageRoutingModule } from './saved-routing.module';

import { SavedPage } from './saved.page';
import { SharedModule } from '../@shared/shared.module';

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, SharedModule],
    declarations: [SavedPage],
    exports: [SavedPage],
})
export class SavedPageModule {}
