import { Component, OnInit } from '@angular/core';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-merchant-employee',
  templateUrl: './merchant-employee.page.html',
  styleUrls: ['./merchant-employee.page.scss'],
})
export class MerchantEmployeePage implements OnInit {

  public shopId: string;
  public hasLoaded: string;
  public mcontentid = "merchant-employee";
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
        // return this.svc.callApiGet(this.mcontentid, "https://mana-facing-dev.azurewebsites.net/BizAccount/637334894267091896/employees")
        return this.svc.getApiData(this.mcontentid);
      })
  }

  refreshCallBack() {
    this.hasLoaded = null;
    let load$ = this.loadData$();
    this.data$ = load$;
    load$.then((it: any) => {
      this.shopId = it._id;
      this.hasLoaded = (it && it.bizEmployees.length > 0) ? "y" : "n";
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
    this.svc.visitEndpoint(this.mcontentid, "https://s.manal.ink/np/nbizemp-create$" + this.shopId);
  }

  // TODO: implement onSelect (ยังไม่มี ui)
  public onSelectItem(endpointId: string) {
    this.svc.visitEndpoint(this.mcontentid, "https://s.manal.ink/np/nbizdtl-" + endpointId);
  }
}
