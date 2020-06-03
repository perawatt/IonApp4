import { Component, OnInit } from '@angular/core';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-gpsaddress-select',
  templateUrl: './gpsaddress-select.page.html',
  styleUrls: ['./gpsaddress-select.page.scss'],
})
export class GpsaddressSelectPage implements OnInit {

  //TODO: Romove comment and removes set hasLoaded = y
  public hasLoaded: string = "y";
  public data$;
  private mcontentid: string = "gpsaddress-select";

  constructor(private svc: IonManaLib) {}

  ngOnInit() {
    // this.hasLoaded = null;
    // let load$ = this.loadData$();
    // this.data$ = load$;    
    // load$.then(it => {            
    //   this.hasLoaded = it ? "y" : "n"; 
    // });
  }

  private loadData$() {
    return this.svc.initPageApi(this.mcontentid)
      .then(_ => {
        return this.svc.getApiData(this.mcontentid);
      })
  }

}
