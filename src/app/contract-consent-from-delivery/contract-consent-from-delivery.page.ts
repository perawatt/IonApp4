import { Component, OnInit } from '@angular/core';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-contract-consent-from-delivery',
  templateUrl: './contract-consent-from-delivery.page.html',
  styleUrls: ['./contract-consent-from-delivery.page.scss'],
})
export class ContractConsentFromDeliveryPage implements OnInit {

  private mcontentid = "contract-consent-from-delivery";
  constructor(private svc: IonManaLib) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.svc.initPageApi(this.mcontentid);
  }
}
