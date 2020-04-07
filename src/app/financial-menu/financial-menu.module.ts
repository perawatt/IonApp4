import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinancialMenuPageRoutingModule } from './financial-menu-routing.module';

import { FinancialMenuPage } from './financial-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinancialMenuPageRoutingModule
  ],
  declarations: [FinancialMenuPage]
})
export class FinancialMenuPageModule {}
