import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-wallet-topup-howto-bank-select',
  templateUrl: './wallet-topup-howto-bank-select.page.html',
  styleUrls: ['./wallet-topup-howto-bank-select.page.scss'],
})
export class WalletTopupHowtoBankSelectPage implements OnInit {

  private mcontentid = "wallet-topup-howto-bank-select";
  public banklist = [
    { name: "กรุงไทย", bankCode: "KTB", logo: "assets/imgs/HowTo/BankLogo/ktb.png" },
    { name: "กสิกรไทย", bankCode: "KBANK", logo: "assets/imgs/HowTo/BankLogo/kbank.png" },
    { name: "ไทยพาณิชย์", bankCode: "SCB", logo: "assets/imgs/HowTo/BankLogo/scb.png" },
    { name: "ทหารไทย", bankCode: "TMB", logo: "assets/imgs/HowTo/BankLogo/tmb.png" },
    { name: "กรุงศรีอยุธยา", bankCode: "BAY", logo: "assets/imgs/HowTo/BankLogo/bay.png" },
    { name: "ธนชาต", bankCode: "TBANK", logo: "assets/imgs/HowTo/BankLogo/tbank.png" },
    { name: "กรุงเทพ", bankCode: "BBL", logo: "assets/imgs/HowTo/BankLogo/bbl.png" },
    { name: "ออนสิน", bankCode: "GSB", logo: "assets/imgs/HowTo/BankLogo/gsb.png" },
  ];
  constructor(private router: Router, private svc: IonManaLib) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.svc.initPageApi(this.mcontentid);
  }

  onSelectBank(bank: string) {
    this.router.navigate(['/wallet-topup-howto-bank-detail', bank]);
  }
}
