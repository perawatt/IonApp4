import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-wallet-withdraw-select',
  templateUrl: './wallet-withdraw-select.page.html',
  styleUrls: ['./wallet-withdraw-select.page.scss'],
})
export class WalletWithdrawSelectPage implements OnInit {

  private mcontentid: string = "wallet-withdraw-select";
  constructor(private svc: IonManaLib, private router: Router) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.svc.initPageApi(this.mcontentid);
  }

  public onSelectWithdrawByMTM() {
    this.router.navigate(['/wallet-withdraw-detail-by-mtm'])  
  }

  public onSelectWithdrawByPromptpay() {
    this.svc.visitEndpoint(this.mcontentid, "https://s.manal.ink/msg/underconstruction");
  }

}
