import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MerchantEmployeePageRoutingModule } from './merchant-employee-routing.module';

import { MerchantEmployeePage } from './merchant-employee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MerchantEmployeePageRoutingModule
  ],
  declarations: [MerchantEmployeePage]
})
export class MerchantEmployeePageModule {}
