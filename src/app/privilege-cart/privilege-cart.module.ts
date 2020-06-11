import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrivilegeCartPageRoutingModule } from './privilege-cart-routing.module';

import { PrivilegeCartPage } from './privilege-cart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrivilegeCartPageRoutingModule
  ],
  declarations: [PrivilegeCartPage]
})
export class PrivilegeCartPageModule {}
