import { Component, OnInit } from '@angular/core';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-shopping-cart-delivery-select',
  templateUrl: './shopping-cart-delivery-select.page.html',
  styleUrls: ['./shopping-cart-delivery-select.page.scss'],
})
export class ShoppingCartDeliverySelectPage implements OnInit {

  public hasLoaded: string;
  public title: string = "เลือกผู้จัดส่ง";
  private mcontentid = "shopping-cart-delivery-select";
  constructor(private svc: IonManaLib) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.svc.initPageApi(this.mcontentid);
  }
}
