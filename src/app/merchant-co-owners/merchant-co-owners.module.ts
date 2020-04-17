import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MerchantCoOwnersPageRoutingModule } from './merchant-co-owners-routing.module';

import { MerchantCoOwnersPage } from './merchant-co-owners.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MerchantCoOwnersPageRoutingModule
  ],
  declarations: [MerchantCoOwnersPage]
})
export class MerchantCoOwnersPageModule {}
