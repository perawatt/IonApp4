import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchMainPageRoutingModule } from './search-main-routing.module';

import { SearchMainPage } from './search-main.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SearchMainPageRoutingModule
  ],
  declarations: [SearchMainPage]
})
export class SearchMainPageModule {}
