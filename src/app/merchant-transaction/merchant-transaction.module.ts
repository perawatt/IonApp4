import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MerchantTransactionPageRoutingModule } from './merchant-transaction-routing.module';

import { MerchantTransactionPage } from './merchant-transaction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MerchantTransactionPageRoutingModule
  ],
  declarations: [MerchantTransactionPage]
})
export class MerchantTransactionPageModule {}
