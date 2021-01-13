import { Component, OnInit } from '@angular/core';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-chatlistinfo',
  templateUrl: './chatlistinfo.page.html',
  styleUrls: ['./chatlistinfo.page.scss'],
})
export class ChatlistinfoPage implements OnInit {

  public mcontentid: string = "chatlistinfo";
  public hasLoaded: string;
  public data$ = Promise.resolve<{}>({});
  constructor(private svc: IonManaLib) { }

  ngOnInit() {
    this.svc.initPageApi(this.mcontentid);
  }

  ionViewDidEnter() {
    this.svc.addToolbarAction((action) => this.onTabToolbarItem(action));
  }

  Go() {
    this.svc.visitEndpoint(this.mcontentid, "https://s.manal.ink/np/nxxxyyy-002");
  }

  public onTabToolbarItem(action) {
    switch (action) {
      case "Add": this.Add(); break;
      default: break;
    }
  }

  public Add() {
    this.svc.visitEndpoint(this.mcontentid, "https://s.manal.ink/np/address")
  }

}
