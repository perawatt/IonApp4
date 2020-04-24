import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemoFormDialogInfoPageRoutingModule } from './demo-form-dialog-info-routing.module';

import { DemoFormDialogInfoPage } from './demo-form-dialog-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    DemoFormDialogInfoPageRoutingModule
  ],
  declarations: [DemoFormDialogInfoPage]
})
export class DemoFormDialogInfoPageModule {}
