import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserProfileEditNamePageRoutingModule } from './user-profile-edit-name-routing.module';

import { UserProfileEditNamePage } from './user-profile-edit-name.page';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,    
    ReactiveFormsModule,
    DirectivesModule,
    UserProfileEditNamePageRoutingModule
  ],
  declarations: [UserProfileEditNamePage]
})
export class UserProfileEditNamePageModule {}
