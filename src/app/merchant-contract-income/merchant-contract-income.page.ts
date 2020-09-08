import { Component, OnInit } from '@angular/core';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-merchant-contract-income',
  templateUrl: './merchant-contract-income.page.html',
  styleUrls: ['./merchant-contract-income.page.scss'],
})
export class MerchantContractIncomePage implements OnInit {

  public hasLoaded: string;
  public mcontentid = "merchant-contract-income";
  public data$ = Promise.resolve<{}>({});
  constructor(private svc: IonManaLib) { }
  
  ngOnInit() {
  }

  ionViewDidEnter() {
    this.hasLoaded = null;
    let load$ = this.loadData$();
    this.data$ = load$;
    load$.then(it => {
      this.hasLoaded = it ? "y" : "n";
    });
  }

  private loadData$() {
    return this.svc.initPageApi(this.mcontentid)
      .then(_ => {
        // return this.svc.callApiGet(this.mcontentid,"http://mana-facing-dev.azurewebsites.net/BizAccount/contracts/2")
        return this.svc.getApiData(this.mcontentid);
      })
  }
}
