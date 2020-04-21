import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PpayTransferConfirmPageRoutingModule } from './ppay-transfer-confirm-routing.module';

import { PpayTransferConfirmPage } from './ppay-transfer-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PpayTransferConfirmPageRoutingModule
  ],
  declarations: [PpayTransferConfirmPage]
})
export class PpayTransferConfirmPageModule {}
