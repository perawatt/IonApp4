import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EslipShopSelectPageRoutingModule } from './eslip-shop-select-routing.module';

import { EslipShopSelectPage } from './eslip-shop-select.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EslipShopSelectPageRoutingModule
  ],
  declarations: [EslipShopSelectPage]
})
export class EslipShopSelectPageModule {}
