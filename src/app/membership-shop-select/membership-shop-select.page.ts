import { Component, OnInit } from '@angular/core';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-membership-shop-select',
  templateUrl: './membership-shop-select.page.html',
  styleUrls: ['./membership-shop-select.page.scss'],
})
export class MembershipShopSelectPage implements OnInit {

  public hasLoaded: string;
  public data$ = Promise.resolve<{}>({});
  private mcontentid = "membership-shop-select";

  constructor(private svc: IonManaLib) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.hasLoaded = null;
    let load$ = this.loadData$();
    this.data$ = load$;
    load$.then(it => {
      this.hasLoaded = (it && it.length > 0) ? "y" : "n";
      console.log(this.hasLoaded)
    });
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
      this.hasLoaded = (it && it.length > 0) ? "y" : "n";
      console.log(this.hasLoaded)
    });
  }

  public onSelectItem(url: string) {
    this.svc.visitEndpoint(this.mcontentid, url);
  }
}
