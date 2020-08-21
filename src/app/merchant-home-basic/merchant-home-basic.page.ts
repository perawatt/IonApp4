import { Component, OnInit } from '@angular/core';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-merchant-home-basic',
  templateUrl: './merchant-home-basic.page.html',
  styleUrls: ['./merchant-home-basic.page.scss'],
})
export class MerchantHomeBasicPage implements OnInit {

  // TODO : Binding title
  public title: string = "Shop";
  public hasLoaded: string;
  private mcontentid = "merchant-home-basic";
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
        // return this.svc.callApiGet(this.mcontentid,"http://mana-facing-dev.azurewebsites.net/BizAccount/637334893975177162/basic")
        return this.svc.getApiData(this.mcontentid);
      })
  }

}
