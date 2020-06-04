import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MerchantHomeBasicPageRoutingModule } from './merchant-home-basic-routing.module';

import { MerchantHomeBasicPage } from './merchant-home-basic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MerchantHomeBasicPageRoutingModule
  ],
  declarations: [MerchantHomeBasicPage]
})
export class MerchantHomeBasicPageModule {}
