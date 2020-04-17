import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MerchantSelectPageRoutingModule } from './merchant-select-routing.module';

import { MerchantSelectPage } from './merchant-select.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MerchantSelectPageRoutingModule
  ],
  declarations: [MerchantSelectPage]
})
export class MerchantSelectPageModule {}
