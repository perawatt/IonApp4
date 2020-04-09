import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletSettingPageRoutingModule } from './wallet-setting-routing.module';

import { WalletSettingPage } from './wallet-setting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletSettingPageRoutingModule
  ],
  declarations: [WalletSettingPage]
})
export class WalletSettingPageModule {}
