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
    let load$ = this.loadData$();
    load$.then((it: any) => {
      this.data$ = it;
    });
  }

  private loadData$() {
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
