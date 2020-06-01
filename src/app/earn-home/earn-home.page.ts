import { Component, OnInit, NgZone, Renderer2 } from '@angular/core';
import { createAnimation, Animation } from '@ionic/core';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-earn-home',
  templateUrl: './earn-home.page.html',
  styleUrls: ['./earn-home.page.scss'],
})
export class EarnHomePage implements OnInit {

  // HACK: Mock server return feed datas.
  private serverFeedList = [];

  public hasLoaded: string;
  public feeds = [];
  private mcontentid = "earn-home";
  constructor(private zone: NgZone, private renderer: Renderer2, private svc: IonManaLib) {
  }

  ngOnInit() {
    let load$ = this.loadData$();
    load$.then(it => {
        // this.hasLoaded = (it && it.length > 0) ? "y" : "n";
      });
  }
  
  private loadData$() {
    return this.svc.initPageApi(this.mcontentid)
      .then(_ => {
        return this.svc.getApiData(this.mcontentid);
      })
  }

  ionViewDidEnter() {
    setTimeout(() => {
      this.getFeeds();
    }, 1000);
  }

  doRefresh(event) {
    setTimeout(() => {
      this.getFeeds();
      event.target.complete();
    }, 500);
  }

  getFeeds() {
    let load$ = this.getApiData();
    this.zone.run(() => {
      load$.then(it => {
        this.addManaFeeds(it);
        this.hasLoaded = (it && it.length > 0) ? "y" : "n";
      });
    });

  }

  private feedCount: number = 1;
  getApiData(): Promise<any> {
    return new Promise<any>((resolve) => {
      var randomFeeds = Math.floor(Math.random() * 10);
      randomFeeds = 2;
      for (let index = 0; index < randomFeeds; index++) {
        var now = new Date();
        now.setMinutes(now.getMinutes() + Math.floor(Math.random() * 60));
        var currentFeedCount = this.feedCount++;
        var data = {
          id: currentFeedCount,
          thumbnailImageURL: "https://cdn.iconscout.com/icon/free/png-256/love-romantic-valentine-day-message-chat-9-24049.png",
          title: "Title: " + currentFeedCount,
          description: "Description: " + currentFeedCount,
          expirationDate: now,
        };
        this.serverFeedList.push(data);
      }
      resolve(this.serverFeedList);
    })
  }

  deleteFeed(feed) {
    if (this.feeds.length <= 0) return;

    this.playAnimationDeleteFeed(feed.id)
    setTimeout(() => {
      let index: number = this.feeds.indexOf(feed);
      this.feeds.splice(index, 1);
    }, 450);
  }

  addManaFeeds(feedList: []) {
    if (!feedList || feedList.length <= 0) return;

    feedList.sort(function (a: any, b: any) { return a.expirationDate - b.expirationDate })
    let timerId = setInterval(() => {

      this.feeds.push(feedList.pop());
      setTimeout(() => {
        this.playAnimationNewFeed();
      }, 50);

      if (feedList.length <= 0) {
        clearInterval(timerId);
      }
    }, 300);
  }

  playAnimationNewFeed() {
    let element = document.getElementById("manafeed").firstElementChild;
    this.renderer.addClass(element, "feed-news");
  }

  playAnimationDeleteFeed(id) {
    let element = document.getElementById(id.toString());
    this.renderer.addClass(element, "feed-delete");
  }

  // HACK: Mock remove random feed
  removeRandomFeed() {
    let randomIndex = Math.floor(Math.random() * this.feeds.length);
    let feed = this.feeds[randomIndex];
    this.deleteFeed(feed);
  }

  seeMoreFeed() {
    let feedLengths = this.feeds.length;

    // Mock: Generate feeds to see more.
    for (let index = 0; index < 10; index++) {
      let currentFeedCount = this.feedCount++;
      let data = {
        id: currentFeedCount,
        thumbnailImageURL: "https://cdn.iconscout.com/icon/free/png-256/love-romantic-valentine-day-message-chat-9-24049.png",
        title: "Title: see more-" + currentFeedCount,
        description: "Description: see more-" + currentFeedCount,
        expirationDate: new Date(),
      };
      this.feeds.unshift(data);
    }

    let displayFeedList = document.getElementById("manafeed").children;

    setTimeout(() => {
      for (let index = feedLengths; index < displayFeedList.length; index++) {
        let element = displayFeedList.item(index);
        this.renderer.addClass(displayFeedList[index], "feed-news");
      }
    }, 50);
  }

  homeFeedAction(feed: any) {
    // TODO: Call service to client.
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
