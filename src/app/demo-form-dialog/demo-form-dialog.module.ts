import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemoFormDialogPageRoutingModule } from './demo-form-dialog-routing.module';

import { DemoFormDialogPage } from './demo-form-dialog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    DemoFormDialogPageRoutingModule
  ],
  declarations: [DemoFormDialogPage]
})
export class DemoFormDialogPageModule {}
