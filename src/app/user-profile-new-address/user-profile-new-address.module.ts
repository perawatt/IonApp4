import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserProfileNewAddressPageRoutingModule } from './user-profile-new-address-routing.module';

import { UserProfileNewAddressPage } from './user-profile-new-address.page';
import { DirectivesModule } from 'src/directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    DirectivesModule,
    UserProfileNewAddressPageRoutingModule
  ],
  declarations: [UserProfileNewAddressPage]
})
export class UserProfileNewAddressPageModule {}
