import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserProfileAddressPageRoutingModule } from './user-profile-address-routing.module';

import { UserProfileAddressPage } from './user-profile-address.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserProfileAddressPageRoutingModule
  ],
  declarations: [UserProfileAddressPage]
})
export class UserProfileAddressPageModule {}
