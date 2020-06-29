import { Component, OnInit } from '@angular/core';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-contract-consent-from-shop',
  templateUrl: './contract-consent-from-shop.page.html',
  styleUrls: ['./contract-consent-from-shop.page.scss'],
})
export class ContractConsentFromShopPage implements OnInit {

  private mcontentid = "contract-consent-from-shop";
  constructor(private svc: IonManaLib) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.svc.initPageApi(this.mcontentid);
  }
}
