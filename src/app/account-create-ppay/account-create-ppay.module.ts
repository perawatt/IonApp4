import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountCreatePpayPageRoutingModule } from './account-create-ppay-routing.module';

import { AccountCreatePpayPage } from './account-create-ppay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountCreatePpayPageRoutingModule
  ],
  declarations: [AccountCreatePpayPage]
})
export class AccountCreatePpayPageModule {}
