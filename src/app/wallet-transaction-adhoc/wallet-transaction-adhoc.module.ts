import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletTransactionAdhocPageRoutingModule } from './wallet-transaction-adhoc-routing.module';

import { WalletTransactionAdhocPage } from './wallet-transaction-adhoc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletTransactionAdhocPageRoutingModule
  ],
  declarations: [WalletTransactionAdhocPage]
})
export class WalletTransactionAdhocPageModule {}
