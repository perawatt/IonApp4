import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PpayTransferCreatingPageRoutingModule } from './ppay-transfer-creating-routing.module';

import { PpayTransferCreatingPage } from './ppay-transfer-creating.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PpayTransferCreatingPageRoutingModule
  ],
  declarations: [PpayTransferCreatingPage]
})
export class PpayTransferCreatingPageModule {}
