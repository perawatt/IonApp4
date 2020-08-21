import { Component, OnInit } from '@angular/core';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-merchant-edit-code',
  templateUrl: './merchant-edit-code.page.html',
  styleUrls: ['./merchant-edit-code.page.scss'],
})
export class MerchantEditCodePage implements OnInit {
  public hasLoaded: string;
  public data$ = Promise.resolve<{}>({});
  private mcontentid = "merchant-edit-code";


  constructor(private svc: IonManaLib) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.hasLoaded = null;
    let load$ = this.loadData$();
    this.data$ = load$;
    load$.then(it => {
    });
  }

  private loadData$() {
    return this.svc.initPageApi(this.mcontentid)
      .then(_ => {
        return this.svc.callApiGet(this.mcontentid,"https://mana-facing-dev.azurewebsites.net/BizAccount/637334894267091896/code")
        // return this.svc.getApiData(this.mcontentid);
      })
  }
}
