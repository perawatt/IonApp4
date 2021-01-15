import { Component, OnInit } from '@angular/core';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-account-create-select',
  templateUrl: './account-create-select.page.html',
  styleUrls: ['./account-create-select.page.scss'],
})
export class AccountCreateSelectPage implements OnInit {

  private mcontentid = "account-create-select";

  constructor(private svc: IonManaLib) { }

  ngOnInit() {
  }

  public onSelectPromptPay() {
    let url = "https://s.manal.ink/externalaccount/add/promptpay/neacadd-home";
    this.svc.visitEndpoint(this.mcontentid, url);
  }

  public onSelectBank() {
    let url = "https://s.manal.ink/externalaccount/add/bankaccount/neacadd-home";
    this.svc.visitEndpoint(this.mcontentid, url);
  }
}
