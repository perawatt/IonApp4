import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrivilegeConfirmPageRoutingModule } from './privilege-confirm-routing.module';

import { PrivilegeConfirmPage } from './privilege-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrivilegeConfirmPageRoutingModule
  ],
  declarations: [PrivilegeConfirmPage]
})
export class PrivilegeConfirmPageModule {}
