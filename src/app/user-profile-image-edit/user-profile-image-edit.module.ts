import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserProfileImageEditPageRoutingModule } from './user-profile-image-edit-routing.module';

import { UserProfileImageEditPage } from './user-profile-image-edit.page';
import { DirectivesModule } from 'src/directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    DirectivesModule,
    UserProfileImageEditPageRoutingModule
  ],
  declarations: [UserProfileImageEditPage]
})
export class UserProfileImageEditPageModule {}
