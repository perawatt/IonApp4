import { Component, OnInit } from '@angular/core';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-privilege-cart',
  templateUrl: './privilege-cart.page.html',
  styleUrls: ['./privilege-cart.page.scss'],
})
export class PrivilegeCartPage implements OnInit {
  
  public mcontentid: string = "privilege-cart";
  public hasLoaded: string;
  public data$ = Promise.resolve<{}>({});
  constructor(private svc: IonManaLib) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.hasLoaded = null;
    let load$ = this.loadData$();
    this.data$ = load$;
    load$.then(it => {
      this.svc.initPageApi(this.mcontentid);
      this.hasLoaded = it ? "y" : "n";
      console.log(it);
      
    });
  }

  private loadData$() {
    return this.svc.initPageApi(this.mcontentid)
      .then(_ => {
        return this.svc.getApiData(this.mcontentid);
      })
  }

}
