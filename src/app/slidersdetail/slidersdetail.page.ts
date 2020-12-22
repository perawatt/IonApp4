import { Component, NgZone, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { IonManaLib } from 'ion-m-lib';
import { observable } from 'rxjs';
@Component({
  selector: 'app-slidersdetail',
  templateUrl: './slidersdetail.page.html',
  styleUrls: ['./slidersdetail.page.scss'],
})
export class SlidersdetailPage implements OnInit {
  public mcontentid: string = "slidersdetail";
  public hasLoaded: string;
  public data$ = Promise.resolve<{}>({});
  private getShoutCutApi: string = "https://s.manal.ink/api/home/shortcuts";
  public shortcuts = [];
  private loadingEvent: any;
  public dataPage: any;

  constructor(private svc: IonManaLib, private zone: NgZone, public navParams: NavParams) {
    // this.shortcuts = this.navParams.get('shotCut');
    // this.dataPage = this.navParams.get('pages');
    // console.log("1234");
    // console.log(this.dataPage.hasLoaded);
    // (<any>window).syncShortcuts = () => {
    //   console.log("Slider");
    //   window.alert("message")
    //   // this.refreshCallBack();
    // };
  }
  ngOnInit() {
  }

  ionViewDidEnter() {
    this.refreshCallBack();
  }

  private refreshCallBack() {
    console.log("Refresh go back Slider");

    this.hasLoaded = null;
    let load$ = this.loadData$();
    this.data$ = load$;
    load$.then(it => {
      this.svc.initPageApi(this.mcontentid);
      this.hasLoaded = (it.length > 0) ? "y" : "n";
    });
  }

  private loadData$() {
    return this.svc.initPageApiWithCallBack(this.mcontentid, () => this.refreshCallBack())
      .then(_ => {
        return this.svc.callApiGet(this.mcontentid, this.getShoutCutApi);
      })
  }

  // doRefresh(event) {
  //   this.loadingEvent = event;
  //   this.loadingEvent.target.complete();
  //   this.refreshCallBack();
  // }

  visitEndpoint(url) {
    this.svc.visitEndpoint(this.mcontentid, url);
  }
}
