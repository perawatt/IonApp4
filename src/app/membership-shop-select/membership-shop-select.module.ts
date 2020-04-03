import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MembershipShopSelectPageRoutingModule } from './membership-shop-select-routing.module';

import { MembershipShopSelectPage } from './membership-shop-select.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MembershipShopSelectPageRoutingModule
  ],
  declarations: [MembershipShopSelectPage]
})
export class MembershipShopSelectPageModule {}
