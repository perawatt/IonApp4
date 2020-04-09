import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletWithdrawDetailByMtmPageRoutingModule } from './wallet-withdraw-detail-by-mtm-routing.module';

import { WalletWithdrawDetailByMtmPage } from './wallet-withdraw-detail-by-mtm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletWithdrawDetailByMtmPageRoutingModule
  ],
  declarations: [WalletWithdrawDetailByMtmPage]
})
export class WalletWithdrawDetailByMtmPageModule {}
