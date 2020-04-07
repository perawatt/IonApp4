import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserProfileEditAddressPageRoutingModule } from './user-profile-edit-address-routing.module';

import { UserProfileEditAddressPage } from './user-profile-edit-address.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserProfileEditAddressPageRoutingModule
  ],
  declarations: [UserProfileEditAddressPage]
})
export class UserProfileEditAddressPageModule {}
