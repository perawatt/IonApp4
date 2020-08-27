import { Component, OnInit } from '@angular/core';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-merchant-deposit',
  templateUrl: './merchant-deposit.page.html',
  styleUrls: ['./merchant-deposit.page.scss'],
})
export class MerchantDepositPage implements OnInit {

  public hasLoaded: string;
  public mcontentid = "merchant-deposit";
  public data$ = Promise.resolve<{}>({});
  constructor(private svc: IonManaLib) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.refreshCallBack();
  }

  private loadData$() {
    return this.svc.initPageApiWithCallBack(this.mcontentid, () => this.refreshCallBack())
      .then(_ => {
        // return this.svc.callApiGet(this.mcontentid, "http://mana-facing-dev.azurewebsites.net/BizAccount/637334893975177162/pledges")
        return this.svc.getApiData(this.mcontentid);
      })
  }

  refreshCallBack() {
    this.hasLoaded = null;
    let load$ = this.loadData$();
    this.data$ = load$;
    load$.then((it: any) => {
      this.hasLoaded = (it && it.pledges.length > 0) ? "y" : "n";
    });
  }

  public onSelectItem(endpointId: string) {
    this.svc.visitEndpoint(this.mcontentid, "https://s.manal.ink/np/nbizplg-" + endpointId);
  }
}
