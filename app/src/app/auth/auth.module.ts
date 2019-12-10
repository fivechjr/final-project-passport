import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../@shared/shared.module';
import { AuthPage } from './auth.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule,
        SharedModule,
        ReactiveFormsModule,
    ],
    declarations: [AuthPage],
})
export class AuthPageModule {}
