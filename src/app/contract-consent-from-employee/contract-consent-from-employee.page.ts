import { Component, OnInit } from '@angular/core';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-contract-consent-from-employee',
  templateUrl: './contract-consent-from-employee.page.html',
  styleUrls: ['./contract-consent-from-employee.page.scss'],
})
export class ContractConsentFromEmployeePage implements OnInit {

  private mcontentid = "contract-consent-from-employee";
  constructor(private svc: IonManaLib) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.svc.initPageApi(this.mcontentid);
  }
}
