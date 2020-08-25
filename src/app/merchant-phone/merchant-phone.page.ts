import { Component, OnInit } from '@angular/core';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-merchant-phone',
  templateUrl: './merchant-phone.page.html',
  styleUrls: ['./merchant-phone.page.scss'],
})
export class MerchantPhonePage implements OnInit {

  public hasLoaded: string;
  public mcontentid = "merchant-phone";
  public data$ = Promise.resolve<{}>({});
  public merchantId: string;

  constructor(private svc: IonManaLib) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.svc.addToolbarAction((action) => this.onTabToolbarItem(action));
    this.refreshCallBack();
  }

  private loadData$() {
    return this.svc.initPageApiWithCallBack(this.mcontentid, () => this.refreshCallBack())
      .then(_ => {
        // return this.svc.callApiGet(this.mcontentid, "http://mana-facing-dev.azurewebsites.net/BizAccount/637334893975177162/phones")
        return this.svc.getApiData(this.mcontentid);
      })
  }

  refreshCallBack() {
    this.hasLoaded = null;
    let load$ = this.loadData$();
    this.data$ = load$;
    load$.then((it: any) => {
      this.merchantId = it._id;
      console.log(it)
      this.hasLoaded = (it && it.phoneNumbers.length > 0) ? "y" : "n";
      console.log(this.hasLoaded);
    });
  }

  public onTabToolbarItem(action) {
    switch (action) {
      case "Add": this.Add(); break;
      default: break;
    }
  }

  public Add() {
    this.svc.visitEndpoint(this.mcontentid, "https://s.manal.ink/np/nbizphn-create$" + this.merchantId);
  }

}
