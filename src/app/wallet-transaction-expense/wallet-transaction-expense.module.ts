import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletTransactionExpensePageRoutingModule } from './wallet-transaction-expense-routing.module';

import { WalletTransactionExpensePage } from './wallet-transaction-expense.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletTransactionExpensePageRoutingModule
  ],
  declarations: [WalletTransactionExpensePage]
})
export class WalletTransactionExpensePageModule {}
