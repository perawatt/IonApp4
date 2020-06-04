import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MerchantBudgetPageRoutingModule } from './merchant-budget-routing.module';

import { MerchantBudgetPage } from './merchant-budget.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MerchantBudgetPageRoutingModule
  ],
  declarations: [MerchantBudgetPage]
})
export class MerchantBudgetPageModule {}
