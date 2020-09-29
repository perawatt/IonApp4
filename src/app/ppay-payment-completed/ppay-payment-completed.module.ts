import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PpayPaymentCompletedPageRoutingModule } from './ppay-payment-completed-routing.module';

import { PpayPaymentCompletedPage } from './ppay-payment-completed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PpayPaymentCompletedPageRoutingModule
  ],
  declarations: [PpayPaymentCompletedPage]
})
export class PpayPaymentCompletedPageModule {}
