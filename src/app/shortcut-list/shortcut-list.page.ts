import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-shortcut-list',
  templateUrl: './shortcut-list.page.html',
  styleUrls: ['./shortcut-list.page.scss'],
})
export class ShortcutListPage implements OnInit {

  public mcontentid: string = "shortcut-list";
  private getShoutCutApi: string = "https://s.manal.ink/api/home/shortcuts";
  public shareShortcut: any;
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
