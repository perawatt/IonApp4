import { Component, OnInit, NgZone, Renderer2 } from '@angular/core';
import { createAnimation, Animation } from '@ionic/core';
import { IonManaLib } from 'ion-m-lib';
import { element } from 'protractor';

@Component({
  selector: 'app-earn-home',
  templateUrl: './earn-home.page.html',
  styleUrls: ['./earn-home.page.scss'],
})
export class EarnHomePage implements OnInit {

  private mcontentid: string = "home-feed";
  private hasSeeMore: boolean = false;
  private isLoadingSeeMore: boolean = false;
  private totalObsoleteFeedIds: any[] = [];
  private getShoutCutApi: string = "https://s.manal.ink/api/home/shortcuts";

  public hasLoaded: string;
  public feeds = [];
  public shortcuts$ = Promise.resolve<any[]>([]);
  public slideOpts = { slidesPerView: 4 };

  constructor(private zone: NgZone, private renderer: Renderer2, private svc: IonManaLib) {
    (<any>window).updateMoreFeed = () => {
      let load$ = this.moreFeeds_FromNative();
      this.zone.run(() => {
        load$.then(response => {
          this.manageFeeds(response);
        });
      });
    };

    (<any>window).syncShortcuts = () => this.getShortcuts();
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    setTimeout(() => {
      this.svc.initPageApiWithCallBack(this.mcontentid, () => this.refreshCallBack())
        .then(() => {

          let load$ = this.getFeed_FromNative();
          this.zone.run(() => {
            load$.then(response => {
              this.manageFeeds(response);
              this.hasLoaded = (response && response.feeds.length > 0) ? "y" : "n";
            });
          });

          this.getShortcuts();
        });
    }, 1000);
  }

  doRefresh(event) {
    setTimeout(() => {

      let load$ = this.getFeed_FromNative();
      this.zone.run(() => {
        load$.then(response => {
          this.manageFeeds(response, true);
        });
      });

      event.target.complete();
    }, 500);
  }

  async logScrolling($event) {
    const scrollElement = await $event.target.getScrollElement();
    const scrollHeight = scrollElement.scrollHeight - scrollElement.clientHeight;
    const currentScrollDepth = $event.detail.scrollTop;
    const targetPercent = 80;
    let triggerDepth = ((scrollHeight / 100) * targetPercent);
    if (currentScrollDepth > triggerDepth) {
      let shouldLoadSeeMore = this.hasSeeMore && !this.isLoadingSeeMore;
      if (!shouldLoadSeeMore) return;
      this.isLoadingSeeMore = true;

      let load$ = this.moreFeeds_FromNative();
      this.zone.run(() => {
        load$.then(response => {
          this.isLoadingSeeMore = false;
          this.manageFeeds(response);
        });
      });

    }
  }

  refreshCallBack() {
    let load$ = this.getFeed_FromNative();
    this.zone.run(() => {
      load$.then(response => {
        this.manageFeeds(response, true);
      });
    });
  }

  getShortcuts() {
    let load$ = this.svc.callApiGet(this.mcontentid, this.getShoutCutApi);
    this.zone.run(() => { this.shortcuts$ = load$; });
  }

  manageFeeds(feeds: any, isNewFeedAnimation: boolean = false) {
    let result = this.convertFeed(feeds, isNewFeedAnimation);
    result = this.removeObsoleteFeeds(result);
    this.hasSeeMore = result.HasSeeMore
    this.totalObsoleteFeedIds = this.totalObsoleteFeedIds.concat(result.ObsoleteFeeds);

    this.displayMoreFeeds(result.MoreFeeds);
    setTimeout(() => {
      this.displayRemoveFeeds();
      setTimeout(() => {
        this.displayAddNewFeeds(result.NewFeeds);
      }, 200);
    }, 400);
  }

  convertFeed(value: any, isNewFeedAnimation: boolean = false): FeedListInfo {
    let hasSeeMore = value.hasMorePages;
    let newFeeds = isNewFeedAnimation ? value.feeds : [];
    let moreFeeds = !isNewFeedAnimation ? value.feeds : [];
    let obsoleteFeeds = value.obsoleteFeedIds;
    return new FeedListInfo(hasSeeMore, newFeeds, moreFeeds, obsoleteFeeds);
  }

  removeObsoleteFeeds(value: FeedListInfo): FeedListInfo {
    let now = new Date();
    value.NewFeeds = value.NewFeeds.filter((it: any) => !(now >= it.expirationDate) && !this.totalObsoleteFeedIds.includes(it.id));
    value.MoreFeeds = value.MoreFeeds.filter((it: any) => !(now >= it.expirationDate) && !this.totalObsoleteFeedIds.includes(it.id));
    return value;
  }

  displayMoreFeeds(feeds: any[]) {
    let feedIdExists = this.feeds.map(it => it.id);
    feeds = feeds.filter((it: any) => !feedIdExists.includes(it.id));
    if (feeds.length < 0) return;

    let feedCountBeforeAdd = this.feeds.length
    feeds.forEach(it => this.feeds.unshift(it));

    setTimeout(() => {
      let displayFeeds = document.getElementById("manafeed").children;
      for (let index = 0; index < displayFeeds.length - feedCountBeforeAdd; index++) {
        let element = displayFeeds.item(index);
        this.playAnimationNewFeed(element);
      }
    }, 600);
  }

  displayRemoveFeeds() {
    let obsoleteFeeds = this.totalObsoleteFeedIds;
    if (obsoleteFeeds.length > 0) obsoleteFeeds.forEach(id => this.removeFeed(id));

    let now = new Date();
    let expiredFeeds = this.feeds.filter(it => now >= it.expirationDate);
    if (expiredFeeds.length > 0) expiredFeeds.forEach(it => this.removeFeed(it.id));
  }

  removeFeed(id) {
    this.playAnimationDeleteFeed(id)

    setTimeout(() => {
      let index = this.feeds.findIndex(it => it.id == id);
      if (index < 0) return;
      this.feeds.splice(index, 1);
    }, 300);
  }

  displayAddNewFeeds(feeds: any[]) {
    let feedIdExists = this.feeds.map(it => it.id);
    feeds = feeds.filter((it: any) => !feedIdExists.includes(it.id));
    if (feeds.length <= 0) return;

    let timerId = setInterval(() => {
      this.feeds.push(feeds.pop());
      setTimeout(() => { this.playAnimationNewFeed(); }, 50);

      if (feeds.length <= 0) clearInterval(timerId);
    }, 300);
  }

  playAnimationNewFeed(element: any = null) {
    if (!element) element = document.getElementById("manafeed").lastElementChild;
    this.renderer.addClass(element, "feed-news");
  }

  playAnimationDeleteFeed(id) {
    let element = document.getElementById(id);
    if (element) this.renderer.addClass(element, "feed-delete");
  }

  homeFeedAction(feed: any) {
    // TODO: Call service to client.
  }

  IsDeleteFeed(feed: any) {
    return this.DisplayExpireDateTime(feed) == "Expired";
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

  visitEndpoint(url: any) {
    this.svc.visitEndpoint(this.mcontentid, url);
  }

  getFeed_FromNative(): Promise<any> {
    return this.callNativeFunc('newFeeds');
  }

  moreFeeds_FromNative(): Promise<any> {
    return this.callNativeFunc('moreFeeds');
  }

  private callAppMethod(fName: string, fParam: any) {
    return new Promise((resolve, reject) => {
      try {
        TheSHybridCall(fName, fParam);
        resolve({});
      } catch (error) {
        console.log(error);
        resolve(error);
      }
    });
  }

  private callNativeFunc(fName: string, fParam: string = "") {
    return new Promise((resolve, reject) => {
      try {
        TheSHybridFunc(fName, fParam, rsp => resolve(rsp));
      } catch (error) {
        resolve(error);
      }
    });
  }

}

export class FeedListInfo {
  constructor(
    public HasSeeMore: boolean = false,
    public NewFeeds: any[] = [],
    public MoreFeeds: any[] = [],
    public ObsoleteFeeds: any[] = []) { }
}

declare function TheSHybridCall(methodName: string, parameter: any): void;
declare function TheSHybridFunc(methodName: string, parameter: string, callback: any): void;