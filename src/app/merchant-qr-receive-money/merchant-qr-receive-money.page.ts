import { Component, OnInit } from '@angular/core';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-merchant-qr-receive-money',
  templateUrl: './merchant-qr-receive-money.page.html',
  styleUrls: ['./merchant-qr-receive-money.page.scss'],
})
export class MerchantQrReceiveMoneyPage implements OnInit {

  public hasLoaded: string;
  private mcontentid = "merchant-qr-receive-money";
  public data$ = Promise.resolve<{}>({});

  constructor(private svc: IonManaLib) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.hasLoaded = null;
    let load$ = this.loadData$();
    this.data$ = load$;
    load$.then(it => {
      this.hasLoaded = (it && it.length > 0) ? "y" : "n";
    });
  }

  private loadData$() {
    return this.svc.initPageApi(this.mcontentid)
      .then(_ => {
        return this.svc.getApiData(this.mcontentid);
      })
  }
}
