import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { IonSearchbar, Platform } from '@ionic/angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { IonManaLib } from 'ion-m-lib';
import { time } from 'console';

@Component({
  selector: 'app-search-main',
  templateUrl: './search-main.page.html',
  styleUrls: ['./search-main.page.scss'],
})

export class SearchMainPage implements OnInit {
  private mcontentid = "search-main";
  private pagingNumber = 1;
  private currentSearchText = "";

  public deleyTime: number = 250;
  public hasMorePages = false;
  public isSearching = true;

  public fg: FormGroup;
  public resultHasload: string = null;

  public searchItems: any = [];
  public resultItems: any = {};

  private isfocus = true;

  constructor(private fb: FormBuilder, private svc: IonManaLib, private zone: NgZone) {
    (<any>window).TextChanged = (param: any) => {
      this.zone.run(() => {
        this.currentSearchText = param;
        this.inputChanged(param);
      });
    }
    (<any>window).Focused = (param: any) => {
      this.zone.run(() => {
        this.isfocus = true;
        this.isSearching = true;
      });
    }
    (<any>window).Unfocused = (param: any) => {
      this.zone.run(() => {
        this.isfocus = false;
        setTimeout(() => {
          if (!this.isfocus) { this.isSearching = false; }
        }, 200);
      });
    }
    (<any>window).SearchButtonPressed = (param: any) => {
      this.zone.run(() => {
        this.currentSearchText = param;
        this.showResult(param);
      });
    }

    this.fg = this.fb.group({
      'searchInput': [null, Validators.required],
    });
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.svc.initPageApi(this.mcontentid).then(async () => {
      this.showHistories();
      this.resultHasload = 'n';
    });
  }

  onSelectSearch(keyword: any) {
    this.changeSearchInput(keyword)
    this.showResult(keyword);
  }

  changeSearchInput(keyword: string) {
    this.currentSearchText = keyword;
    this.fg.get("searchInput").setValue(keyword);
    this.callAppMethod('ChangeSearchInput', keyword)
  }

  inputChanged(searchTexh: string) {
    if (searchTexh && searchTexh.trim() !== '') {
      this.showSuggest(searchTexh)
    } else {
      this.showHistories();
    }
  }

  async showHistories() {
    var histories = await this.getHistory();
    this.searchItems = histories && histories.length > 0 ? histories : [];
  }

  async showSuggest(searchTexh: string) {
    this.searchItems = [];
    var histories = await this.getHistory();
    histories = histories && histories.length > 0 ? histories : [];

    histories.forEach(x => {
      if (x.text.toLowerCase().includes(searchTexh.toLowerCase())) {
        this.searchItems.push(x);
      }
    });

    this.svc.callApiGet(this.mcontentid, "http://mana-gateway-dev.azurewebsites.net/search/suggest?txt=" + searchTexh).then(it => {
      if (this.currentSearchText.toLowerCase().trim() == it.text.toLowerCase().trim()) {
        it.suggestItems.forEach(element => {
          this.searchItems.push(element);
          histories.forEach(h => {
            if (h.text == element.text) {
              this.searchItems.pop();
              return;
            }
          });
        });
      }
    });
  }

  showResult(searchText: string) {
    this.saveHistory(searchText);
    this.hasMorePages = false;
    this.resultHasload = null;
    this.resultItems = undefined;
    this.pagingNumber = 1;

    this.svc.callApiGet(this.mcontentid, "http://mana-gateway-dev.azurewebsites.net/search/result?txt=" + searchText + "&pageno=" + this.pagingNumber).then(it => {
      this.resultItems = it;
      this.resultHasload = it && it.searchItems && it.searchItems.length != 0 ? "y" : "n";
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
    // return new Promise((res, rej) => {
    //   res();
    // });
    return this.callNativeFunc("GetSearchHistories", "");
  }

  visitEndpoint(endpoint: string) {
    if (this.isSearching) return;
    this.svc.visitEndpoint(this.mcontentid, endpoint);
  }

  saveHistory(keyWord: string) {
    var param = JSON.stringify({ text: keyWord.toLocaleLowerCase(), icon: "assets/imgs/serecent.png" });
    this.callAppMethod("SaveSearchHistory", param);
  }

  public getStatusIcon(status: string) {
    switch (status.toLowerCase()) {
      case "mana": return "assets/imgs/cemana.png";
      case "memberships": return "assets/imgs/cemem.png";
      case "shops": return "assets/imgs/ceshop.png";
      case "products": return "assets/imgs/ceprod.png";
      case "endpoints": return "assets/imgs/ceend.png";
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

  onInputUnfocus() {
    this.isSearching = false;
  }

  onInputFocus() {
    this.isSearching = true;
  }

  onInputChange(ev: any) {
    const val = ev.target.value;
    this.currentSearchText = val;
    this.inputChanged(val);
  }

  onSubmit() {
    let searchInput = this.fg.get("searchInput").value;
    this.showResult(searchInput)
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