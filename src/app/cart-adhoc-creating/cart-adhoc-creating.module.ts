import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartAdhocCreatingPageRoutingModule } from './cart-adhoc-creating-routing.module';

import { CartAdhocCreatingPage } from './cart-adhoc-creating.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CartAdhocCreatingPageRoutingModule
  ],
  declarations: [CartAdhocCreatingPage]
})
export class CartAdhocCreatingPageModule {}
