import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserProfileEditNamePageRoutingModule } from './user-profile-edit-name-routing.module';

import { UserProfileEditNamePage } from './user-profile-edit-name.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserProfileEditNamePageRoutingModule
  ],
  declarations: [UserProfileEditNamePage]
})
export class UserProfileEditNamePageModule {}
