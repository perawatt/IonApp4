import { Component, OnInit } from '@angular/core';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-trackdetail',
  templateUrl: './trackdetail.page.html',
  styleUrls: ['./trackdetail.page.scss'],
})
export class TrackdetailPage implements OnInit {
  public mcontentid: string = "trackdetail";
  public hasLoaded: string;
  public data$ = Promise.resolve<{}>({});
  constructor(private svc: IonManaLib) { }

  ngOnInit() {
    this.svc.initPageApi(this.mcontentid);

  }

}
