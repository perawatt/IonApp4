import { Component, OnInit } from '@angular/core';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.page.html',
  styleUrls: ['./shopping-cart.page.scss'],
})
export class ShoppingCartPage implements OnInit {

  private mcontentid = "shopping-cart";

  private default: any;
  public title: string = "สั่งสินค้า";
  public data$ = Promise.resolve<{}>({});
  public hasLoaded: string;
  public devlivery: any;

  constructor(private svc: IonManaLib) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.refreshCallBack()
  }

  private loadData$() {
    return this.svc.initPageApi(this.mcontentid)
      .then(_ => {
        return this.svc.getApiData(this.mcontentid);
      })
  }

  private refreshCallBack() {
    this.hasLoaded = null;
    let load$ = this.loadData$();
    this.data$ = load$;
    load$.then(it => {
      this.default = it.shippingMethod;
      this.devlivery = this.default;
      this.setUserLocation(it.shippingAddress.location.address, it.shippingAddress.location.latitude, it.shippingAddress.location.longitude, it.shippingAddress.location.phoneNumber, it.shippingAddress.location.remark);
      this.hasLoaded = it ? "y" : "n";
    });
  }

  openDialog() {
    let mcid_optiondialog = "shopping-cart-delivery-select";
    this.svc.showOptionDialog(mcid_optiondialog, this.default).then((response) => {
      let status = response.isOk ? "ok" : "cancel";
      if (status == "ok") {
        this.devlivery = response.data;
      }
    });
  }


  private setUserLocation(address: string, latitude: string, longitude: string, phoneNumber: string, remark: string) {
    this.svc.setGpsSection(address, latitude, longitude, phoneNumber, remark);
  }

  public visiEndpoint(endpoint: string) {
    this.svc.visitEndpoint(this.mcontentid, endpoint);
  }
}
