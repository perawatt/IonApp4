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
  public fg: FormGroup;
  public deleyTime: number = 100;
  private mcontentid = "search-main";

  public searhHasload: string = null;
  public resultHasload: string = null;

  isSearching = false;
  canSearching = true;

  historyItems = [];
  searchItems = [];
  resultItems = [];

  constructor(private fb: FormBuilder, private svc: IonManaLib, private zone: NgZone) {
    (<any>window).TextChanged = (param: any) => {
      this.zone.run(() => {
        this.searching(param);
      });
    }
    (<any>window).Focused = (param: any) => {
      this.zone.run(() => {
        this.searching(param);
      });
    }
    (<any>window).SearchButtonPressed = (param: any) => {
      this.zone.run(() => {
        this.submitSearch(param);
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

  @ViewChild('searchbar', { static: false }) searchbar: IonSearchbar;

  ionViewDidEnter() {
    this.svc.initPageApi(this.mcontentid).then(async () => {
      this.searching('');
    });
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

  onSelectSearch(keyword: any) {
    this.canSearching = false;

    this.fg.get("searchInput").setValue(keyword);
    this.callAppMethod('ChangeSearchInput', keyword)

    setTimeout(() => {
      this.onSubmit();
    }, this.deleyTime);
  }

  submitSearch(searchText: string) {
    this.saveHistory(searchText);
    this.searchItems = [];
    this.resultHasload = null;

    this.isSearching = false;
    this.svc.callApiGet(this.mcontentid, "http://mana-gateway-dev.azurewebsites.net/search/result?txt=" + searchText).then(it => {
      this.resultHasload = it && it.length != 0 ? "y" : "n";
      console.log("filterHasload : " + this.searhHasload);

      this.resultItems = it;
    });
    this.canSearching = true;
  }

  searching(searchTexh: string) {
    if (this.canSearching) {
      setTimeout(async () => {

        this.resultItems = [];
        this.isSearching = true;
        this.searhHasload = null;

        if (searchTexh && searchTexh.trim() !== '') {
          await this.showSearching(searchTexh)
        } else {
          await this.showHistories();
        }
      }, this.deleyTime);
    }
  }

  async showSearching(searchTexh: string) {
    var temp = [];
    this.historyItems.forEach(x => {
      if (x.text.toLowerCase().includes(searchTexh.toLowerCase())) {
        temp.push(x);
      }
    });
    this.searchItems = temp;
    this.svc.callApiGet(this.mcontentid, "http://mana-gateway-dev.azurewebsites.net/search/suggest?txt=" + searchTexh).then(it => {
      this.searchItems = temp;
      it.forEach(element => {
        this.searchItems.push(element);
        this.historyItems.forEach(h => {
          if (h.text == element.text) {
            this.searchItems.pop();
            return;
          }
        });
      });
    });
  }

  async showHistories() {
    var histories = await this.getHistory();
    this.historyItems = [];
    histories.forEach(element => {
      this.historyItems.push(element);
    });
    this.searchItems = this.historyItems;
    this.searhHasload = histories && histories.length != 0 ? "y" : "n";
  }

  getHistory(): Promise<any> {
    // return new Promise((res, rej) => {
    //   res([{ text: "Promome", icon: "assets/imgs/serecent.png" }, { text: "prab", icon: "assets/imgs/serecent.png" }, { text: "ส้มหยุด", icon: "assets/imgs/serecent.png" }, { text: "pi", icon: "assets/imgs/serecent.png" }]);
    // });
    return this.callNativeFunc("GetSearchHistories", "");
  }

  saveHistory(keyWord: string) {
    this.callAppMethod("SaveSearchHistory", keyWord);
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
    this.searching(val);
  }

  onSubmit() {
    let searchInput = this.fg.get("searchInput").value;
    this.submitSearch(searchInput)
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