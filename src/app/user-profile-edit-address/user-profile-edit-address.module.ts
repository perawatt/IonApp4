import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserProfileEditAddressPageRoutingModule } from './user-profile-edit-address-routing.module';

import { UserProfileEditAddressPage } from './user-profile-edit-address.page';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    DirectivesModule,
    UserProfileEditAddressPageRoutingModule
  ],
  declarations: [UserProfileEditAddressPage]
})
export class UserProfileEditAddressPageModule {}
