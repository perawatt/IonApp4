import { Component, OnInit } from '@angular/core';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-gpsaddress-select-location',
  templateUrl: './gpsaddress-select-location.page.html',
  styleUrls: ['./gpsaddress-select-location.page.scss'],
})
export class GpsaddressSelectLocationPage implements OnInit {

  private mcontentid = "gpsaddress-select-location";
  constructor(private svc: IonManaLib) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.svc.initPageApi(this.mcontentid);
  }

}
