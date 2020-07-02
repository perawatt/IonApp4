import { Component, OnInit } from '@angular/core';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-shopping-cart-pay',
  templateUrl: './shopping-cart-pay.page.html',
  styleUrls: ['./shopping-cart-pay.page.scss'],
})
export class ShoppingCartPayPage implements OnInit {

  private mcontentid = "shopping-cart-pay";

  public title: string = "จ่ายเงิน";
  public data$ = Promise.resolve<{}>({});
  public hasLoaded: string;
 
  constructor(private svc: IonManaLib) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.refreshCallBack()
  }

  private loadData$() {
    return this.svc.initPageApiWithCallBack(this.mcontentid, () => this.refreshCallBack())
      .then(_ => {
        return this.svc.getApiData(this.mcontentid);
      })
  }

  private refreshCallBack() {
    this.hasLoaded = null;
    let load$ = this.loadData$();
    this.data$ = load$;
    load$.then(it => {
      this.setUserLocation(it.shippingAddress.location.address, it.shippingAddress.location.latitude, it.shippingAddress.location.longitude, it.shippingAddress.location.phoneNumber, it.shippingAddress.location.remark);
      this.hasLoaded = it ? "y" : "n";
    });
  }

  private setUserLocation(address: string, latitude: string, longitude: string, phoneNumber: string, remark: string) {
    this.svc.setGpsSection(address, latitude, longitude, phoneNumber, remark);
  }

  public visiEndpoint(endpoint: string) {
    this.svc.visitEndpoint(this.mcontentid, endpoint);
  }
}
