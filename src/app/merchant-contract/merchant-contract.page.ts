import { Component, OnInit } from '@angular/core';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-merchant-contract',
  templateUrl: './merchant-contract.page.html',
  styleUrls: ['./merchant-contract.page.scss'],
})
export class MerchantContractPage implements OnInit {

  public hasLoaded: string;
  public mcontentid = "merchant-contract";
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
        // return this.svc.callApiGet(this.mcontentid, "http://mana-facing-dev.azurewebsites.net/BizAccount/637334893975177162/contracts")
        return this.svc.getApiData(this.mcontentid);
      })
  }

  refreshCallBack() {
    this.hasLoaded = null;
    let load$ = this.loadData$();
    this.data$ = load$;
    load$.then((it: any) => {
      this.hasLoaded = (it && it.contracts.length > 0) ? "y" : "n";
    });
  }

  public onSelectItem(endpointId: string) {
    this.svc.visitEndpoint(this.mcontentid, " https://s.manal.ink/np/nbizctt-" + endpointId);
  }
}
