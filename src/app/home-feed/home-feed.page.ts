import { Component, OnInit, NgZone } from '@angular/core';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-home-feed',
  templateUrl: './home-feed.page.html',
  styleUrls: ['./home-feed.page.scss'],
})
export class HomeFeedPage implements OnInit {

  public hasLoaded: string;
  private mcontentid: string = "home-feed";

  private getShoutCutApi: string = "https://s.manal.ink/api/home/shortcuts";

  public shortcuts$ = Promise.resolve<any[]>([]);
  public feeds$ = Promise.resolve<any[]>([]);
  constructor(private svc: IonManaLib, private zone: NgZone) {
    (<any>window).syncHomeFeeds = () => this.getFeeds();
    (<any>window).syncShortcuts = () => this.getShortcuts();
  }

  ngOnInit() {
  }

  slideOpts = {
    slidesPerView: 4
  }

  ionViewDidEnter() {
    this.svc.initPageApi(this.mcontentid).then(() => {
      this.getFeeds();
      this.getShortcuts();
    });
  }

  doRefresh(event) {
    this.hasLoaded = null;
    setTimeout(() => {
      this.getFeeds();
      this.getShortcuts();
      event.target.complete();
    }, 500);
  }

  getFeeds() {
    this.hasLoaded = null;
    let load$ = this.svc.getApiData(this.mcontentid);
    // this.feeds$ = load$;
    this.zone.run(() => {
      this.feeds$ = load$;
      load$.then(it => {
        this.hasLoaded = (it && it.length > 0) ? "y" : "n";
      });
    });
  }

  getShortcuts() {
    let load$ = this.svc.callApiGet(this.mcontentid, this.getShoutCutApi);
    this.zone.run(() => { this.shortcuts$ = load$; });
    this.shortcuts$ = load$;
  }

  visitEndpoint(url) {
    this.svc.visitEndpoint(this.mcontentid, url);
  }

  homeFeedAction(feed: any) {
    this.feeds$.then(feeds => {
      if (this.IsDeleteFeed(feed)) {
        let index: number = feeds.indexOf(feed);
        if (index !== -1) {
          feeds.splice(index, 1);
          this.feeds$ = Promise.resolve<any[]>(feeds);
        }
      }
    });
    this.svc.visitEndpoint(this.mcontentid, feed.endpoint);
  }

  IsDeleteFeed(feed: any) {
    return feed.isDeletable || this.DisplayExpireDateTime(feed) == "Expired";
  }

  IsExpirable(feed: any) {
    return feed.expirationDate != undefined;
  }

  DisplayExpireDateTime(feed: any) {
    if (!this.IsExpirable(feed)) return '';
    var now = new Date();
    var MinTime = 1000 * 60;
    var HoursTime = MinTime * 60;
    var DayTime = HoursTime * 24;
    var MonthTime = DayTime * 30;
    feed.expirationDate = new Date(feed.expirationDate);
    var expirationDate = feed.expirationDate;
    var isExpired = now >= expirationDate;
    if (isExpired) return "Expired";
    var timeRemaining = (expirationDate.getTime() - now.getTime());
    if (Math.round(timeRemaining / MinTime) < 60) return Math.round(timeRemaining / MinTime).toString() + " min";
    else if (Math.round(timeRemaining / HoursTime) < 24) return Math.round(timeRemaining / HoursTime).toString() + " hr";
    else if (Math.round(timeRemaining / DayTime) < 30)
      if (Math.round(timeRemaining / DayTime) == 1) return "1 da";
      else return Math.round(timeRemaining / DayTime).toString() + " da";
    else if (Math.round(timeRemaining / MonthTime) == 1) return "1 mo";
    else return Math.round(timeRemaining / MonthTime) + " mo";
  }
}
