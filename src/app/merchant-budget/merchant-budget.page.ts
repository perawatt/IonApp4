import { Component, OnInit } from '@angular/core';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-merchant-budget',
  templateUrl: './merchant-budget.page.html',
  styleUrls: ['./merchant-budget.page.scss'],
})
export class MerchantBudgetPage implements OnInit {

  public hasLoaded: string;
  public mcontentid = "merchant-budget";
  public data$ = Promise.resolve<{}>({});
  constructor(private svc: IonManaLib) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    // TODO: implement addToolbarAction (ยังไม่มี ui)
    // this.svc.addToolbarAction((action) => this.onTabToolbarItem(action));
    this.refreshCallBack();
  }

  private loadData$() {
    return this.svc.initPageApiWithCallBack(this.mcontentid, () => this.refreshCallBack())
      .then(_ => {
        // return this.svc.callApiGet(this.mcontentid,"https://mana-facing-dev.azurewebsites.net/BizAccount/637334894267091896/budgets")
        return this.svc.getApiData(this.mcontentid);
      })
  }

  refreshCallBack() {
    this.hasLoaded = null;
    let load$ = this.loadData$();
    this.data$ = load$;
    load$.then((it: any) => {
      console.log(it)
      this.hasLoaded = (it && it.bizBudgets.length > 0) ? "y" : "n";       
    });
  }

  // TODO: implement addToolbarAction (ยังไม่มี ui)
  public onTabToolbarItem(action) {
    switch (action) {
      case "Add": this.Add(); break;
      default: break;
    }
  }

  // TODO: implement addToolbarAction (ยังไม่มี ui)
  public Add() {
    this.svc.visitEndpoint(this.mcontentid, "https://s.manal.ink/np/nbizdtl-create");
  }
}
