import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartAdhocPayPageRoutingModule } from './cart-adhoc-pay-routing.module';

import { CartAdhocPayPage } from './cart-adhoc-pay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartAdhocPayPageRoutingModule
  ],
  declarations: [CartAdhocPayPage]
})
export class CartAdhocPayPageModule {}
