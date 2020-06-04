import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MerchantEmployeePage } from './merchant-employee.page';

const routes: Routes = [
  {
    path: '',
    component: MerchantEmployeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerchantEmployeePageRoutingModule {}
