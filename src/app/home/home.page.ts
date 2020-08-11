import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isItemAvailable = false;
  items: SearchListItem[] = [];
  filterd = [];
  constructor() {
    this.items.push({ id: "1", category: "shop", type: "histories", logo: "", searchText: "บ้านมอ" });
    this.items.push({ id: "4", category: "shop", type: "histories", logo: "", searchText: "Coffee De La" });
    this.items.push({ id: "5", category: "shop", type: "histories", logo: "", searchText: "แล้วแต่ กะเพราแท้" });
    this.items.push({ id: "7", category: "shop", type: "histories", logo: "", searchText: "ย่างเพราเห่าดง" });
    this.items.push({ id: "9", category: "shop", type: "histories", logo: "", searchText: "Grus Cafe" });
    this.items.push({ id: "2", category: "shop", type: "suggestion", logo: "", searchText: "มานะ" });
    this.items.push({ id: "3", category: "shop", type: "suggestion", logo: "", searchText: "ก๋วยเตี๋ยวสิบสาม" });
    this.items.push({ id: "6", category: "shop", type: "suggestion", logo: "", searchText: "ย่างเพรา เห่าดง" });
    this.items.push({ id: "8", category: "third", type: "suggestion", logo: "", searchText: "Promome" });
  }

  getItems(ev: any) {
    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() !== '') {
      this.isItemAvailable = true;
      this.filterd = this.items.filter((item) => {
        return (item.searchText.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.isItemAvailable = false;
    }
  }
}

export class SearchListItem {
  constructor() { }
  id: string;
  logo: string;
  type: string;
  searchText: string;
  category: string;
}

