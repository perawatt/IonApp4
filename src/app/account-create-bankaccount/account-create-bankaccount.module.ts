import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountCreateBankaccountPageRoutingModule } from './account-create-bankaccount-routing.module';

import { AccountCreateBankaccountPage } from './account-create-bankaccount.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountCreateBankaccountPageRoutingModule
  ],
  declarations: [AccountCreateBankaccountPage]
})
export class AccountCreateBankaccountPageModule {}
