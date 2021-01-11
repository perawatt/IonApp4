import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountCreateSelectPageRoutingModule } from './account-create-select-routing.module';

import { AccountCreateSelectPage } from './account-create-select.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountCreateSelectPageRoutingModule
  ],
  declarations: [AccountCreateSelectPage]
})
export class AccountCreateSelectPageModule {}
