import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MerchantBusinessExpensePageRoutingModule } from './merchant-business-expense-routing.module';

import { MerchantBusinessExpensePage } from './merchant-business-expense.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MerchantBusinessExpensePageRoutingModule
  ],
  declarations: [MerchantBusinessExpensePage]
})
export class MerchantBusinessExpensePageModule {}
