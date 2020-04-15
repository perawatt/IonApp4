import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-wallet-topup-select',
  templateUrl: './wallet-topup-select.page.html',
  styleUrls: ['./wallet-topup-select.page.scss'],
})
export class WalletTopupSelectPage implements OnInit {

  private mcontentid: string = "wallet-topup-select";
  constructor(private router: Router, private svc: IonManaLib) { }

  ngOnInit() {
  }
  
  ionViewDidEnter() {
    this.svc.initPageApi(this.mcontentid);
  }

  public onSelectTopupByMTM() {
    this.router.navigate(['/wallet-topup-detail-by-mtm-info'])  
  }

  public onSelectTopupByPromptpay() {
    this.svc.visitEndpoint(this.mcontentid, "https://s.manal.ink/msg/underconstruction");
  }

}
