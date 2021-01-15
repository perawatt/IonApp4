import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountCreateBankaccountPageRoutingModule } from './account-create-bankaccount-routing.module';

import { AccountCreateBankaccountPage } from './account-create-bankaccount.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AccountCreateBankaccountPageRoutingModule
  ],
  declarations: [AccountCreateBankaccountPage]
})
export class AccountCreateBankaccountPageModule {}
