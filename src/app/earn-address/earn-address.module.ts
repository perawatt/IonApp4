import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EarnAddressPageRoutingModule } from './earn-address-routing.module';

import { EarnAddressPage } from './earn-address.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EarnAddressPageRoutingModule
  ],
  declarations: [EarnAddressPage]
})
export class EarnAddressPageModule {}
