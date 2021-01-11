import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountConfirmPpayPageRoutingModule } from './account-confirm-ppay-routing.module';

import { AccountConfirmPpayPage } from './account-confirm-ppay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountConfirmPpayPageRoutingModule
  ],
  declarations: [AccountConfirmPpayPage]
})
export class AccountConfirmPpayPageModule {}
