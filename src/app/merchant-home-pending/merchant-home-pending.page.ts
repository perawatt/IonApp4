import { Component, OnInit } from '@angular/core';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-merchant-home-pending',
  templateUrl: './merchant-home-pending.page.html',
  styleUrls: ['./merchant-home-pending.page.scss'],
})
export class MerchantHomePendingPage implements OnInit {

  public title: string = "Shop";
  public hasLoaded: string;
  public data$ = Promise.resolve<{}>({});
  private mcontentid: string = "merchant-home-pending";
  constructor(private svc: IonManaLib) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.hasLoaded = null;
    let load$ = this.loadData$();
    this.data$ = load$;
    load$.then(it => {
      this.svc.initPageApi(this.mcontentid);
      this.title = it.name != null ? it.name : this.title;
      this.hasLoaded = it ? "y" : "n";
    });
  }

  private loadData$() {
    return this.svc.initPageApi(this.mcontentid)
      .then(_ => {
        // return this.svc.callApiGet(this.mcontentid,"http://mana-facing-dev.azurewebsites.net/BizAccount/637374890335148620/basic");
        return this.svc.getApiData(this.mcontentid);
      })
  }
}
