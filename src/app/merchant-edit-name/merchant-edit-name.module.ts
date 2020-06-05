import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MerchantEditNamePageRoutingModule } from './merchant-edit-name-routing.module';

import { MerchantEditNamePage } from './merchant-edit-name.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MerchantEditNamePageRoutingModule
  ],
  declarations: [MerchantEditNamePage]
})
export class MerchantEditNamePageModule {}
