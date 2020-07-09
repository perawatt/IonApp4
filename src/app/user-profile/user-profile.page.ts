import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {

  public hasLoaded: string;
  public data$ = Promise.resolve<{}>({});
  private mcontentid = "user-profile";

  constructor(private router: Router, private svc: IonManaLib) { }

  ngOnInit() { }

  ionViewDidEnter() {
    this.refreshCallBack()
  }

  private loadData$() {
    return this.svc.initPageApiWithCallBack(this.mcontentid, () => this.refreshCallBack())
      .then(_ => {
        return this.svc.getApiData(this.mcontentid);
      })
  }

  private refreshCallBack() {
    this.hasLoaded = null;
    let load$ = this.loadData$();
    this.data$ = load$;
    load$.then(it => {
      this.hasLoaded = it ? "y" : "n";
      console.log(JSON.stringify(it));
    });
  }

  public onSelectEditName() {
    this.svc.visitEndpoint(this.mcontentid, "https://s.manal.ink/profile/name")
  }

  public onSelectViewAddress() {
    this.router.navigate(['/user-profile-address'])
  }

}
