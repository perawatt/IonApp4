import { Component, OnInit } from '@angular/core';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-merchant-select',
  templateUrl: './merchant-select.page.html',
  styleUrls: ['./merchant-select.page.scss'],
})
export class MerchantSelectPage implements OnInit {

  public hasLoaded: string;
  public mcontentid = "merchant-select";
  public data$ = Promise.resolve<{}>({});

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
        return this.svc.callApiGet(this.mcontentid,"http://mana-facing-dev.azurewebsites.net/BizAccount")
        // return this.svc.getApiData(this.mcontentid);
      })
  }

  refreshCallBack() {
    this.hasLoaded = null;
    let load$ = this.loadData$();
    this.data$ = load$;
    load$.then((it: any) => {
      console.log(it)
      this.hasLoaded = (it && it.bizAccounts.length > 0) ? "y" : "n";
    });
  }

  public onTabToolbarItem(action) {
    switch (action) {
      case "Add": this.Add(); break;
      default: break;
    }
  }

  public Add() {
    this.svc.visitEndpoint(this.mcontentid, "https://s.manal.ink/np/nbizdtl-create");
  }

  public onSelectItem(url: string, isActivate: boolean) {
    if (isActivate) {
      this.svc.visitEndpoint(this.mcontentid, url);
    }
  }
}
