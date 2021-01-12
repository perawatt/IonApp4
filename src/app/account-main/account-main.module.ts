import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountMainPageRoutingModule } from './account-main-routing.module';

import { AccountMainPage } from './account-main.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountMainPageRoutingModule
  ],
  declarations: [AccountMainPage]
})
export class AccountMainPageModule {}
