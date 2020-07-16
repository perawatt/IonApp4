import { Component, OnInit } from '@angular/core';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-gpsaddress-select',
  templateUrl: './gpsaddress-select.page.html',
  styleUrls: ['./gpsaddress-select.page.scss'],
})
export class GpsaddressSelectPage implements OnInit {

  public hasLoaded: string;
  public data$ = Promise.resolve<{}>({});
  private mcontentid: string = "gpsaddress-select";

  private selectedValue: any;
  private defaultValue: any;

  constructor(private svc: IonManaLib) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.hasLoaded = null;
    let default$ = this.loadDefault$();
    default$.then((it: any) => {
      this.defaultValue = it;
      let load$ = this.loadData$();
      this.data$ = load$;
      load$.then((it: any[]) => {
        this.hasLoaded = it ? "y" : "n";
      });
    });
  }

  private loadDefault$() {
    return this.svc.initPageApi(this.mcontentid)
      .then(_ => {
        return this.initOptionDialog$();
      })
  }

  private loadData$() {
    return this.svc.initPageApi(this.mcontentid)
      .then(_ => {
        return this.svc.getApiData(this.mcontentid);
      })
  }

  public onSelectAddress(item) {
    this.selectedValue = item;
  }

  private initOptionDialog$() {
    return this.svc.initOptionDialog(this.mcontentid, (response) => {
      if (response == "ok") {
        return this.selectedValue;
      }
      else {
        console.log("Default");
        return this.defaultValue;
      }
    });
  }
}
