import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountConfirmBankaccountPageRoutingModule } from './account-confirm-bankaccount-routing.module';

import { AccountConfirmBankaccountPage } from './account-confirm-bankaccount.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountConfirmBankaccountPageRoutingModule
  ],
  declarations: [AccountConfirmBankaccountPage]
})
export class AccountConfirmBankaccountPageModule {}
