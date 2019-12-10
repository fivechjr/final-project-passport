import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../@shared/shared.module';
import { WalletPage } from './wallet.page';

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, SharedModule],
    declarations: [WalletPage],
})
export class WalletPageModule {}
