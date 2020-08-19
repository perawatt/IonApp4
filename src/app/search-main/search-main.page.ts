import { Component, OnInit, ViewChild } from '@angular/core';
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
  public deleyTime:number = 250;
  isSearching = false;
  items: SearchListItem[] = [];
  defaultItem: SearchListItem[] = [];
  collectionItem: SearchListItem[] = [];
  filterdItems = [];
  
  constructor(private fb: FormBuilder, private svc: IonManaLib, private platfrom: Platform) {
    this.fg = this.fb.group({
      'searchInput': [null, Validators.required],
    });

    this.fg.valueChanges.subscribe(_ => {
      this.svc.validForm(this.fg.valid)
    });

    this.items.push({ id: "1", tags: ["shop"], type: "histories", logo: "assets/imgs/search-clock.png", description: "โปรโมชัน", name: "โปรโมชัน" });
    this.items.push({ id: "2", tags: ["shop", "เครื่องดื่ม"], type: "histories", logo: "assets/imgs/search-clock.png", description: "ร้านคอฟฟี่เดอลา", name: "Coffee De La" });
    this.items.push({ id: "3", tags: ["shop", "อาหาร"], type: "histories", logo: "assets/imgs/search-clock.png", description: "โปรโมชันอาหาร", name: "โปรโมชันอาหาร" });
    this.items.push({ id: "4", tags: ["shop", "อาหาร"], type: "histories", logo: "assets/imgs/search-clock.png", description: "ร้านย่างเพราเห่าดง", name: "ย่างเพราเห่าดง" });
    this.items.push({ id: "5", tags: ["shop"], type: "histories", logo: "assets/imgs/search-clock.png", description: "ร้านกรัส คาเฟ่", name: "Grus Cafe" });
    this.items.push({ id: "6", tags: ["third"], type: "histories", logo: "assets/imgs/search-clock.png", description: "สมาชิก Promome(โปรโมมี)", name: "Promome โปรโมมี" });
    this.items.push({ id: "12", tags: ["third"], type: "histories", logo: "assets/imgs/search-clock.png", description: "", name: "แจกคูปอง" });
    this.items.push({ id: "13", tags: ["third"], type: "histories", logo: "assets/imgs/search-clock.png", description: "ดูหนัง", name: "ดูหนัง " });
    this.items.push({ id: "7", tags: ["shop", "Coupon"], type: "suggestion", logo: "assets/imgs/search-magnifier.png", description: "คูปองร้าน iStudio", name: "ร้าน iStudio" });
    this.items.push({ id: "9", tags: ["shop", "อาหาร"], type: "suggestion", logo: "assets/imgs/search-magnifier.png", description: "ก๋วยเตี๋ยวสิบสาม", name: "ก๋วยเตี๋ยวสิบสาม" });
    this.items.push({ id: "10", tags: ["shop", "อาหาร"], type: "suggestion", logo: "assets/imgs/search-magnifier.png", description: "ร้านย่างเพรา เห่าดง", name: "ย่างเพรา เห่าดง" });
    this.items.push({ id: "11", tags: ["third"], type: "suggestion", logo: "assets/imgs/search-magnifier.png", description: "สมาชิก Promome(โปรโมมี)", name: "Promome" });


    this.defaultItem.push({ id: "1", tags: ["third"], type: "histories", logo: "assets/imgs/search-clock.png", description: "", name: "แจกคูปอง" });
    this.defaultItem.push({ id: "2", tags: ["mana"], type: "membership", logo: "assets/imgs/topup.png", description: "เติมเงิน", name: "เติมเงิน" });
    this.defaultItem.push({ id: "3", tags: ["membership", "promome"], type: "membership", logo: "assets/imgs/shop-default.png", description: "โปรโมมี", name: "Promome" });
    this.defaultItem.push({ id: "4", tags: ["third"], type: "histories", logo: "assets/imgs/search-clock.png", description: "ดูหนัง", name: "ดูหนัง " });
    this.defaultItem.push({ id: "5", tags: ["third"], type: "membership", logo: "assets/imgs/changewallet.png", description: "กระเป๋าเงิน", name: "กระเป๋าเงิน" });
    this.defaultItem.push({ id: "6", tags: ["iStudio", "Coupon"], type: "coupon", logo: "assets/imgs/privilege-info.png", description: "คูปองร้าน iStudio", name: "iStudio" });

    this.collectionItem.push({ id: "1", tags: ["Promome", "Membership"], type: "membership", logo: "assets/imgs/shop-default.png", description: "สมาชิก Promome(โปรโมมี)", name: "Promome" });
    this.collectionItem.push({ id: "2", tags: ["MTM", "Membership"], type: "membership", logo: "assets/imgs/promtpayicon.png", description: "สมาชิก MTM", name: "MTM" });
    this.collectionItem.push({ id: "3", tags: ["Play Cafe", "Coupon"], type: "coupon", logo: "assets/imgs/privilege-point.png", description: "คูปองร้าน Play Cafe", name: "Play Cafe" });
    this.collectionItem.push({ id: "4", tags: ["iStudio", "Coupon"], type: "coupon", logo: "assets/imgs/privilege-info.png", description: "คูปองร้าน iStudio", name: "iStudio" });

  }

  ngOnInit() {
  }

  @ViewChild('searchbar', { static: false }) searchbar: IonSearchbar;

  ionViewDidEnter() {
    this.platfrom.ready().then(()=>{
      this.searchbar.setFocus();
    });
  }

  getItems(ev: any) {
      const val = ev.target.value;
      this.isSearching = true;
      if (val && val.trim() !== '') {
        this.filterdItems = this.items.filter((item) => {
          return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.description.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.tags.indexOf(val.toLowerCase()) > -1);
        })
      } else {
        this.filterdItems = this.defaultItem;
      }
  }

  onSelectSearch(keyword: any) {
    this.fg.get("searchInput").setValue(keyword);
    setTimeout(() => {
      this.onSubmit();
    }, this.deleyTime);
  }

  onSubmit() {
    let searchInput = this.fg.get("searchInput").value;
    if (this.fg.valid) {
      this.isSearching = false;
      this.filterdItems = this.collectionItem.filter((item) => {
        return (item.name.toLowerCase().indexOf(searchInput.toLowerCase()) > -1 || item.description.toLowerCase().indexOf(searchInput.toLowerCase()) > -1 || item.tags.indexOf(searchInput.toLowerCase()) > -1);
      })
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
  tags: string[];
}