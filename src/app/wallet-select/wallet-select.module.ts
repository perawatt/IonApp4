import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletSelectPageRoutingModule } from './wallet-select-routing.module';

import { WalletSelectPage } from './wallet-select.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletSelectPageRoutingModule
  ],
  declarations: [WalletSelectPage]
})
export class WalletSelectPageModule {}
