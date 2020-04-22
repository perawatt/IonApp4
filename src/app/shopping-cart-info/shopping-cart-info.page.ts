import { Component, OnInit } from '@angular/core';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-shopping-cart-info',
  templateUrl: './shopping-cart-info.page.html',
  styleUrls: ['./shopping-cart-info.page.scss'],
})
export class ShoppingCartInfoPage implements OnInit {

  private hasLoaded: string;
  private mcontentid: string = "shopping-cart-info";
  private data$ = Promise.resolve<{}>({});

  constructor(private svc: IonManaLib) { }

  ngOnInit() {
  }

  // ionViewDidEnter() {
  //   this.hasLoaded = null;
  //   let load$ = this.loadData$();
  //   this.data$ = load$;
  //   load$.then(it => {
  //     this.svc.initPageApi(this.mcontentid);
  //     this.hasLoaded = it ? "y" : "n";
  //   });
  // }

  // private loadData$() {
  //   return this.svc.initPageApi(this.mcontentid)
  //     .then(_ => {
  //       return this.svc.getApiData(this.mcontentid);
  //     })
  // }
}
