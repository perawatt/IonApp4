import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MerchantCreatePageRoutingModule } from './merchant-create-routing.module';

import { MerchantCreatePage } from './merchant-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MerchantCreatePageRoutingModule
  ],
  declarations: [MerchantCreatePage]
})
export class MerchantCreatePageModule {}
