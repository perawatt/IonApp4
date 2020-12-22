import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeFeedPageRoutingModule } from './home-feed-routing.module';

import { HomeFeedPage } from './home-feed.page';
import { SlidersdetailPageModule } from '../slidersdetail/slidersdetail.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeFeedPageRoutingModule,
    SlidersdetailPageModule
  ],
  declarations: [HomeFeedPage]
})
export class HomeFeedPageModule {}
