import { Component, OnInit } from '@angular/core';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-privilege-select',
  templateUrl: './privilege-select.page.html',
  styleUrls: ['./privilege-select.page.scss'],
})
export class PrivilegeSelectPage implements OnInit {

  private hasLoaded: string;
  private mcontentid: string = "privilege-select/nafmdtl-637170799141295829";
  private data$ = Promise.resolve<{}>({});
  private title = "สิทธิพิเศษสำหรับสมาชิก";
  constructor(private svc: IonManaLib) { }

  ngOnInit() {
  }
  ionViewDidEnter() {
    this.hasLoaded = null;
    //this.apiUrl = this.navParams.data;
    let load$ = this.loadData$();
    this.data$ = load$;
    load$.then((it: any) => {
      this.svc.initPageApi(this.mcontentid);    
      this.hasLoaded = it ? "y" : "n";
    });
  }

  private loadData$() {
    return this.svc.initPageApi(this.mcontentid)
      .then(_ => {
        return this.svc.getApiData(this.mcontentid);
      })
  }

  // public onSearch(filter: any) {
  //   // TODO: Filter eslip
  // }

  visitEndpoint(item) {
    this.svc.visitEndpoint(this.mcontentid, item.privilege.manaLinkRegistyUrl);
  }

  DisplayExpireDateTime(item: any) {
    var now = new Date();
    var MinTime = 1000 * 60;
    var HoursTime = MinTime * 60;
    var DayTime = HoursTime * 24;
    var MonthTime = DayTime * 30;
    item.expiredDate = new Date(item.expiredDate);
    var expiredDate = item.expiredDate;
    var isExpired = now >= expiredDate;
    if (isExpired) return "หมดเวลา";
    var timeRemaining = (expiredDate.getTime() - now.getTime());
    if (Math.round(timeRemaining / MinTime) < 60) return Math.round(timeRemaining / MinTime).toString() + " นาที";
    else if (Math.round(timeRemaining / HoursTime) < 24) return Math.round(timeRemaining / HoursTime).toString() + " ชั่วโมง";
    else if (Math.round(timeRemaining / DayTime) < 30)
      if (Math.round(timeRemaining / DayTime) == 1) return "1 วัน";
      else return Math.round(timeRemaining / DayTime).toString() + " วัน";
    else if (Math.round(timeRemaining / MonthTime) == 1) return "1 เดือน";
    else return Math.round(timeRemaining / MonthTime) + " เดือน";
  }
}