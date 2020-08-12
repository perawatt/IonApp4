import { Component, ViewChild } from '@angular/core';
import { IonSearchbar } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isItemAvailable = false;
  items: SearchListItem[] = [];
  defaultItem: SearchListItem[] = [];
  filterdItems = [];
  constructor() {
    this.items.push({ id: "1", category: "shop", type: "histories", logo: "assets/imgs/search-clock.png", description: "โปรโมชัน", name: "โปรโมชัน" });
    this.items.push({ id: "2", category: "shop", type: "histories", logo: "assets/imgs/search-clock.png", description: "ร้านคอฟฟี่เดอลา", name: "Coffee De La" });
    this.items.push({ id: "3", category: "shop", type: "histories", logo: "assets/imgs/search-clock.png", description: "โปรโมชันอาหาร", name: "โปรโมชันอาหาร" });
    this.items.push({ id: "4", category: "shop", type: "histories", logo: "assets/imgs/search-clock.png", description: "ร้านย่างเพราเห่าดง", name: "ย่างเพราเห่าดง" });
    this.items.push({ id: "5", category: "shop", type: "histories", logo: "assets/imgs/search-clock.png", description: "ร้านกรัส คาเฟ่", name: "Grus Cafe" });
    this.items.push({ id: "9", category: "third", type: "histories", logo: "assets/imgs/search-clock.png", description: "โปรโมมี", name: "Promome โปรโมมี" });
    this.items.push({ id: "6", category: "shop", type: "suggestion", logo: "assets/imgs/search-magnifier.png", description: "ร้านอาหารหลังมอ", name: "ร้านอาหารหลังมอ" });
    this.items.push({ id: "6", category: "shop", type: "suggestion", logo: "assets/imgs/search-magnifier.png", description: "ดูหนัง", name: "ดูหนัง" });
    this.items.push({ id: "7", category: "shop", type: "suggestion", logo: "assets/imgs/search-magnifier.png", description: "ก๋วยเตี๋ยวสิบสาม", name: "ก๋วยเตี๋ยวสิบสาม" });
    this.items.push({ id: "8", category: "shop", type: "suggestion", logo: "assets/imgs/search-magnifier.png", description: "ร้านย่างเพรา เห่าดง", name: "ย่างเพรา เห่าดง" });
    this.items.push({ id: "9", category: "third", type: "suggestion", logo: "assets/imgs/search-magnifier.png", description: "โปรโมมี", name: "Promome " });

    this.defaultItem.push({ id: "1", category: "shop", type: "histories", logo: "assets/imgs/search-clock.png", description: "", name: "แจกคูปอง" });
    this.defaultItem.push({ id: "2", category: "membership", type: "membership", logo: "assets/imgs/topup.png", description: "เติมเงิน", name: "เติมเงิน" });
    this.defaultItem.push({ id: "3", category: "third", type: "membership", logo: "assets/imgs/shop-default.png", description: "โปรโมมี", name: "Promome " });
    this.defaultItem.push({ id: "4", category: "third", type: "histories", logo: "assets/imgs/search-clock.png", description: "ดูหนัง", name: "ดูหนัง " });
    this.defaultItem.push({ id: "5", category: "third", type: "membership", logo: "assets/imgs/changewallet.png", description: "กระเป๋าเงิน", name: "กระเป๋าเงิน " });
  }

  @ViewChild('searchbar', { static: false }) searchbar: IonSearchbar;

  ionViewDidEnter() {
    this.searchbar.setFocus();
  }

  getItems(ev: any) {
    // set val to the value of the searchbar
    const val = ev.target.value;
    console.log("onChange"+ev);
    this.isItemAvailable = true;

    // if the value is an empty string don't filter the items
    if (val && val.trim() !== '') {
      this.filterdItems = this.items.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.filterdItems = this.defaultItem;

      // this.isItemAvailable = false;
    }
  }
}

export class SearchListItem {
  constructor() { }
  id: string;
  logo: string;
  type: string;
  name: string;
  description: string;
  category: string;
}

