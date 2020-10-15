import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletTransactionAdhocHTMLPageRoutingModule } from './wallet-transaction-adhoc-html-routing.module';

import { WalletTransactionAdhocHTMLPage } from './wallet-transaction-adhoc-html.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletTransactionAdhocHTMLPageRoutingModule
  ],
  declarations: [WalletTransactionAdhocHTMLPage]
})
export class WalletTransactionAdhocHTMLPageModule {}
