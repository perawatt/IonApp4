import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartAdhocCompletedPageRoutingModule } from './cart-adhoc-completed-routing.module';

import { CartAdhocCompletedPage } from './cart-adhoc-completed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartAdhocCompletedPageRoutingModule
  ],
  declarations: [CartAdhocCompletedPage]
})
export class CartAdhocCompletedPageModule {}
