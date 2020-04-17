import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MerchantTransactionExpensePageRoutingModule } from './merchant-transaction-expense-routing.module';

import { MerchantTransactionExpensePage } from './merchant-transaction-expense.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MerchantTransactionExpensePageRoutingModule
  ],
  declarations: [MerchantTransactionExpensePage]
})
export class MerchantTransactionExpensePageModule {}
