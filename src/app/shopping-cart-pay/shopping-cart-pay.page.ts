import { Component, OnInit } from '@angular/core';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-shopping-cart-pay',
  templateUrl: './shopping-cart-pay.page.html',
  styleUrls: ['./shopping-cart-pay.page.scss'],
})
export class ShoppingCartPayPage implements OnInit {

  public hasLoaded: string;
  public title: string = "จ่ายเงิน";
  private mcontentid = "shopping-cart-pay";
  constructor(private svc: IonManaLib) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.svc.initPageApi(this.mcontentid);
    this.hasLoaded = 'y';
  }

}
