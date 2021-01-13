import { Component, OnInit } from '@angular/core';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-trackmoneys',
  templateUrl: './trackmoneys.page.html',
  styleUrls: ['./trackmoneys.page.scss'],
})
export class TrackmoneysPage implements OnInit {

  public mcontentid: string = "trackmoneys";
  public hasLoaded: string;
  public data$ = Promise.resolve<{}>({});
  constructor(private svc: IonManaLib) { }

  ngOnInit() {
    this.svc.initPageApi(this.mcontentid);
  }

}
