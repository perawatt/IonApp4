import { Component, OnInit } from '@angular/core';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-reminder-message',
  templateUrl: './reminder-message.page.html',
  styleUrls: ['./reminder-message.page.scss'],
})
export class ReminderMessagePage implements OnInit {

  public data$ = Promise.resolve<{}>({});
  private mcontentid = "reminder-message";

  constructor(private svc: IonManaLib) { 
    let response = this.svc.getApiData(this.mcontentid)
    this.data$ = response;
  }

  ngOnInit() {
  }

  ionViewDidLoad() {
    this.svc.initPageApi(this.mcontentid);
  }
}
