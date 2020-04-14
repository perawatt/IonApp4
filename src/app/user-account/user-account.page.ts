import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.page.html',
  styleUrls: ['./user-account.page.scss'],
})
export class UserAccountPage implements OnInit {

  private mcontentid: string = "user-account";
  constructor(private router: Router, private svc: IonManaLib) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.svc.initPageApi(this.mcontentid);
  }

  public onSelectProfile() {
    this.router.navigate(['/user-profile'])
  }

  public onSelectSecurity() {
    this.svc.visitEndpoint(this.mcontentid, "https://s.manal.ink/msg/underconstruction");
  }

}
