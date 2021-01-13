import { Component, OnInit } from '@angular/core';
import { IonManaLib } from 'ion-m-lib';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eslip-shop-select',
  templateUrl: './eslip-shop-select.page.html',
  styleUrls: ['./eslip-shop-select.page.scss'],
})
export class EslipShopSelectPage implements OnInit {

  public hasLoaded: string;
  public data$ = Promise.resolve<{}>({});
  private mcontentid = "eslip-shop-select";

  constructor(private router: Router, private svc: IonManaLib) { }

  ionViewDidEnter() {
    this.refreshCallBack();
  }

  ngOnInit() {
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
    });
  }

  public onSelectItem(url: string) {
    console.log(url)
    this.router.navigate(["/eslip-select", url]);
  }
}
