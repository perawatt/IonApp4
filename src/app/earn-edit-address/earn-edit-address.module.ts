import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EarnEditAddressPageRoutingModule } from './earn-edit-address-routing.module';

import { EarnEditAddressPage } from './earn-edit-address.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EarnEditAddressPageRoutingModule
  ],
  declarations: [EarnEditAddressPage]
})
export class EarnEditAddressPageModule {}
