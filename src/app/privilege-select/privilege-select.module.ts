import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrivilegeSelectPageRoutingModule } from './privilege-select-routing.module';

import { PrivilegeSelectPage } from './privilege-select.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrivilegeSelectPageRoutingModule
  ],
  declarations: [PrivilegeSelectPage]
})
export class PrivilegeSelectPageModule {}
