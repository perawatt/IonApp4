import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { IonSearchbar, Platform } from '@ionic/angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-search-main',
  templateUrl: './search-main.page.html',
  styleUrls: ['./search-main.page.scss'],
})

export class SearchMainPage implements OnInit {
  private mcontentid = "search-main";
  private canSearching = true;
  private pagingNumber = 1;
  private currentSearchText = "";

  public deleyTime: number = 100;
  public state = "histories"
  public hasMorePages = false;

  public fg: FormGroup;

  public searchHasload: string = null;
  public resultHasload: string = null;

  public historyItems: any = [];
  public searchItems: any = [];
  public resultItems: any = [];

  constructor(private fb: FormBuilder, private svc: IonManaLib, private zone: NgZone) {
    (<any>window).TextChanged = (param: any) => {
      this.zone.run(() => {
        this.inputChanged(param);
      });
    }
    (<any>window).Focused = (param: any) => {
      this.zone.run(() => {
        this.inputChanged(param);
      });
    }
    (<any>window).SearchButtonPressed = (param: any) => {
      this.zone.run(() => {
        this.canSearching = false;
        this.showResult(param)
        setTimeout(() => {
          this.canSearching = true;
        }, this.deleyTime + 200);
      });
    }

    this.fg = this.fb.group({
      'searchInput': [null, Validators.required],
    });

    this.fg.valueChanges.subscribe(_ => {
      this.svc.validForm(this.fg.valid)
    });
  }

  visitEndpoint(endpoint: string) {
    this.svc.visitEndpoint(this.mcontentid, endpoint);
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.svc.initPageApi(this.mcontentid).then(async () => {
      this.showHistories();
    });
  }

  inputChanged(searchTexh: string) {
    if (!this.canSearching) return;
    setTimeout(async () => {
      if (!this.canSearching) return;
      if (searchTexh && searchTexh.trim() !== '') {
        await this.showSuggest(searchTexh)
      } else {
        await this.showHistories();
      }
    }, this.deleyTime);
  }

  onSelectSearch(keyword: any) {
    this.canSearching = false;

    this.fg.get("searchInput").setValue(keyword);
    this.callAppMethod('ChangeSearchInput', keyword)
    this.showResult(keyword);

    setTimeout(() => {
      this.canSearching = true;
    }, this.deleyTime + 500);
  }

  async showHistories() {
    this.state = "histories";
    var histories = await this.getHistory();
    this.historyItems = histories && histories.length ? histories : [];
  }

  async showSuggest(searchTexh: string) {
    this.state = "suggest";
    this.searchHasload = null;
    this.searchItems = [];
    var histories = [];
    this.historyItems.forEach(x => {
      if (x.text.toLowerCase().includes(searchTexh.toLowerCase())) {
        histories.push(x);
      }
    });
    this.searchItems = histories;
    this.svc.callApiGet(this.mcontentid, "http://mana-gateway-dev.azurewebsites.net/search/suggest?txt=" + searchTexh).then(it => {
      this.searchItems = histories;
      it.forEach(element => {
        this.searchItems.push(element);
        this.historyItems.forEach(h => {
          if (h.text == element.text) {
            this.searchItems.pop();
            return;
          }
        });
      });
      this.searchHasload = this.searchItems && this.searchItems.length != 0 ? "y" : "n";
    });
  }

  showResult(searchText: string) {
    this.state = "result";
    this.hasMorePages = false;
    this.resultItems = [];
    this.saveHistory(searchText);
    this.resultHasload = null;
    this.currentSearchText = searchText;
    this.pagingNumber = 1;

    this.svc.callApiGet(this.mcontentid, "http://mana-gateway-dev.azurewebsites.net/search/result?txt=" + searchText + "&pageno=" + this.pagingNumber).then(it => {
      this.resultHasload = it && it.searchItems && it.searchItems.length != 0 ? "y" : "n";
      this.resultItems = it;
      this.hasMorePages = it.hasMorePages;
    });
  }

  loadMoreAResult() {
    this.hasMorePages = false;
    this.svc.callApiGet(this.mcontentid, "http://mana-gateway-dev.azurewebsites.net/search/result?txt=" + this.currentSearchText + "&pageno=" + (++this.pagingNumber)).then(it => {
      it.searchItems.forEach(element => {
        this.resultItems.searchItems.push(element);
      });
      this.hasMorePages = it.hasMorePages;
    });
  }

  getHistory(): Promise<any> {
    // return new Promise((res, rej) => {
    //   res([{ text: "Promome", icon: "assets/imgs/serecent.png" }, { text: "prab", icon: "assets/imgs/serecent.png" }, { text: "ส้มหยุด", icon: "assets/imgs/serecent.png" }, { text: "pi", icon: "assets/imgs/serecent.png" }]);
    // });
    return new Promise((res, rej) => {
      res("");
    });
    return this.callNativeFunc("GetSearchHistories", "");
  }

  saveHistory(keyWord: string) {
    this.callAppMethod("SaveSearchHistory", keyWord);
  }

  public getStatusIcon(status: string) {
    switch (status) {
      case "mana": return "assets/imgs/cemana.png";
      case "Memberships": return "assets/imgs/cemem.png";
      case "Shops": return "assets/imgs/ceshop.png";
      case "Products": return "assets/imgs/ceprod.png";
      case "Endpoints": return "assets/imgs/ceend.png";
      default: return "assets/imgs/ceend.png"
    }
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

  private callAppMethod(fName: string, fParam: any = "") {
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

  // -------ForIonic-------

  onInputChange(ev: any) {
    const val = ev.target.value;
    this.inputChanged(val);
  }

  onSubmit() {
    this.canSearching = false;
    let searchInput = this.fg.get("searchInput").value;
    this.showResult(searchInput)
    setTimeout(() => {
      this.canSearching = true;
    }, this.deleyTime + 200);
  }
}

export class SearchListItem {
  constructor() { }
  id: string;
  icon: string;
  type: string;
  text: string;
  description: string;
  tags: string[];
}

declare function TheSHybridCall(methodName: string, parameter: any): void;
declare function TheSHybridFunc(methodName: string, parameter: string, callback: any): void;