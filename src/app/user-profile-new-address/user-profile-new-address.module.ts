import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserProfileNewAddressPageRoutingModule } from './user-profile-new-address-routing.module';

import { UserProfileNewAddressPage } from './user-profile-new-address.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserProfileNewAddressPageRoutingModule
  ],
  declarations: [UserProfileNewAddressPage]
})
export class UserProfileNewAddressPageModule {}
