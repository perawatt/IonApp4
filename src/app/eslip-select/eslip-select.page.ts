import { Component, OnInit } from '@angular/core';
import { IonManaLib } from 'ion-m-lib';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eslip-select',
  templateUrl: './eslip-select.page.html',
  styleUrls: ['./eslip-select.page.scss'],
})
export class EslipSelectPage implements OnInit {

  public hasLoaded: string;
  public data$ = Promise.resolve<{}>({});
  public title = "e-Slip";
  private apiUrl: string;
  private mcontentid = "eslip-select";

  constructor(private activatedRoute: ActivatedRoute, private svc: IonManaLib) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.refreshCallBack();
  }
  
  private loadData$() {
    return this.svc.initPageApiWithCallBack(this.mcontentid, () => this.refreshCallBack())
      .then(_ => {
        return this.svc.callApiGet(this.mcontentid, this.apiUrl);
      })
  }

  private refreshCallBack()
  {
    this.hasLoaded = null;
    this.apiUrl = this.activatedRoute.snapshot.paramMap.get('url');
    let load$ = this.loadData$();
    this.data$ = load$;
    load$.then((it: any) => {
      this.title = it.merchant.name;
      this.svc.initPageApi(this.mcontentid);    
      this.hasLoaded = (it && it.eslips.length > 0) ? "y" : "n";
    });
  }

  visitEndpoint(url) {
    this.svc.visitEndpoint(this.mcontentid, url);
  }
}
