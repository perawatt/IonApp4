import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserProfileNewAddressPageRoutingModule } from './user-profile-new-address-routing.module';

import { UserProfileNewAddressPage } from './user-profile-new-address.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    UserProfileNewAddressPageRoutingModule
  ],
  declarations: [UserProfileNewAddressPage]
})
export class UserProfileNewAddressPageModule {}
