import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountBankSelectPageRoutingModule } from './account-bank-select-routing.module';

import { AccountBankSelectPage } from './account-bank-select.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountBankSelectPageRoutingModule
  ],
  declarations: [AccountBankSelectPage]
})
export class AccountBankSelectPageModule {}
