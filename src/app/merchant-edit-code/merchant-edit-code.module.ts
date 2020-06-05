import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MerchantEditCodePageRoutingModule } from './merchant-edit-code-routing.module';

import { MerchantEditCodePage } from './merchant-edit-code.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MerchantEditCodePageRoutingModule
  ],
  declarations: [MerchantEditCodePage]
})
export class MerchantEditCodePageModule {}
