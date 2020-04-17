import { Component, OnInit } from '@angular/core';
import { IonManaLib } from 'ion-m-lib';
import { Router } from '@angular/router';

@Component({
  selector: 'app-merchant-home',
  templateUrl: './merchant-home.page.html',
  styleUrls: ['./merchant-home.page.scss'],
})
export class MerchantHomePage implements OnInit {

  public title = "ร้านของคุณ";
  public hasLoaded: string;
  public data$ = Promise.resolve<{}>({});
  public slideOpts = {
    slidesPerView: window.screen.width/100,
    spaceBetween: 12,
    speed: 400
  };
  private mcontentid = "merchant-home";
  private merchantId: string;

  constructor(private router: Router, private svc: IonManaLib) { }

  ngOnInit() {
  }

  public onSelectReceiveMoneyQR() {
    this.router.navigate(["/merchant-qr-receive-money"]);
  }

  public onSelectAddThirdParty() {
    this.svc.visitEndpoint(this.mcontentid, "https://s.manal.ink/msg/underconstruction");
  }

  public onSelectProfile() {
    this.router.navigate(["/merchant-profile"]);
  }

  public onSelectTransaction() {
    this.router.navigate(["/merchant-transaction"]);
  }

  public onSelectWithDraw() {
    let id = "nbizwdw-" + this.merchantId;
    this.svc.visitEndpoint(this.mcontentid, "https://s.manal.ink/bizcenter/withdraw/" + id);
  }

  public onSelectTopup() {
    let id = "nbizdpt-" + this.merchantId;
    this.svc.visitEndpoint(this.mcontentid, "https://s.manal.ink/bizcenter/deposit/" + id);
  }

  public onSelectOwners() {
    this.router.navigate(["/merchant-co-owners"]);
  }

  public onSelectSetting() {
    this.svc.visitEndpoint(this.mcontentid, "https://s.manal.ink/msg/underconstruction");
  }
}