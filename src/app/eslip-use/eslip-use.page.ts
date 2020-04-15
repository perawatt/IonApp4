import { Component, OnInit } from '@angular/core';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-eslip-use',
  templateUrl: './eslip-use.page.html',
  styleUrls: ['./eslip-use.page.scss'],
})
export class EslipUsePage implements OnInit {

  public hasLoaded: string;
  public data$ = Promise.resolve<{}>({});
  public title = "e-Slip";
  public isShowQR = false;
  public ToggleShowQRButtonText = "แสดงคิวอาร์โค้ด";
  private mcontentid = "eslip-use";

  constructor(private svc: IonManaLib) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.svc.setStateChangedHandler((param) => this.OnStateChanged(param));
    this.OnStateChanged(null);
  }

  private loadData$() {
    return this.svc.initPageApi(this.mcontentid)
      .then(_ => {
        return this.svc.getApiData(this.mcontentid);
      })
  }

  OnStateChanged(state) {
    switch (state) {
      case "using": ;
      case "used": ;
      case "expired": ;
      default: ;
    }

    this.hasLoaded = null;
    let load$ = this.loadData$();
    this.data$ = load$;
    load$.then(it => {
      this.title = it.eslipStub != null ? it.eslipStub.name : this.title;
      this.svc.initPageApi(this.mcontentid);
      this.hasLoaded = it ? "y" : "n";
    });
  }

  public ToggleShowQR() {
    this.isShowQR = !this.isShowQR;
    this.ToggleShowQRButtonText = this.isShowQR ? "ซ่อนคิวอาร์โค้ด" : "แสดงคิวอาร์โค้ด";
  }
}
