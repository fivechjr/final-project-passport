import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPage } from './register.page';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../@shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule,
        SharedModule,
    ],
    declarations: [RegisterPage],
})
export class RegisterPageModule {}
