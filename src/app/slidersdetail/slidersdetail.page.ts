import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavParams } from '@ionic/angular';
import { IonManaLib } from 'ion-m-lib';
@Component({
  selector: 'app-slidersdetail',
  templateUrl: './slidersdetail.page.html',
  styleUrls: ['./slidersdetail.page.scss'],
})
export class SlidersdetailPage implements OnInit {
  public mcontentid: string = "slidersdetail";
  private getShoutCutApi: string = "https://s.manal.ink/api/home/shortcuts";
  public shareShortcut: any;
  public checkstatuls: any;
  constructor(private svc: IonManaLib, private navParams: NavParams, private dlg: ModalController) {
    this.shareShortcut = this.navParams.get('param');
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
  }

  visitEndpoint(url) {
    this.closeDlg()
    this.svc.visitEndpoint(this.mcontentid, url);
  }
  ionViewWillLeave() {
    this.closeDlg()
  }

  closeDlg() {
    this.dlg.dismiss({
      'dismissed': true
    });
  }
}
