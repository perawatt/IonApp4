import { Component, OnInit } from '@angular/core';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-account-confirm-bankaccount',
  templateUrl: './account-confirm-bankaccount.page.html',
  styleUrls: ['./account-confirm-bankaccount.page.scss'],
})
export class AccountConfirmBankaccountPage implements OnInit {

  public hasLoaded: string;
  public data$ = Promise.resolve<{}>({});
  private mcontentid = "account-confirm-bankaccount";

  constructor(private svc: IonManaLib) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.hasLoaded = null;
    let load$ = this.loadData$();
    this.data$ = load$;
    load$.then(it => {
      this.hasLoaded = it ? "y" : "n";
    });
  }

  private loadData$() {
    return this.svc.initPageApi(this.mcontentid)
      .then(_ => {
        return this.svc.getApiData(this.mcontentid);
      })
  }

}
