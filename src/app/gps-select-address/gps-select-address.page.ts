import { Component, OnInit } from '@angular/core';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-gps-select-address',
  templateUrl: './gps-select-address.page.html',
  styleUrls: ['./gps-select-address.page.scss'],
})
export class GpsSelectAddressPage implements OnInit {

  private mcontentid = "gps-select-address";
  public title = "ที่อยู่ใกล้เคียง";
  public selectedItem = null;
  public data$ = Promise.resolve<{}>({});
  constructor(private svc: IonManaLib) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    let default$ = this.loadDefault$();
    default$.then(() => {
      let load$ = this.loadDaa$();
      this.data$ = load$;
    });
  }

  private loadDaa$() {
    return this.svc.initPageApi(this.mcontentid)
    .then(_ => {
      return this.svc.getApiData(this.mcontentid);
    })
  }

  private loadDefault$() {
    return this.svc.initPageApi(this.mcontentid)
      .then(_ => {
        return this.initOptionDialog$();
      })
  }

  private initOptionDialog$() {
    return this.svc.initOptionDialog(this.mcontentid, (response) => {
      if (response == "ok") {
        console.log("Set OK");
        return this.selectedItem;
      }
      else {
        console.log("Default");
        return null;
      }
    });
  }

  public onItemSelected(item: string)
  {
    this.selectedItem = item; 
  }
}
