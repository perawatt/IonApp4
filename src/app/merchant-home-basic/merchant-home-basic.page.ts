import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-merchant-home-basic',
  templateUrl: './merchant-home-basic.page.html',
  styleUrls: ['./merchant-home-basic.page.scss'],
})
export class MerchantHomeBasicPage implements OnInit {

  // TODO : Binding title
  public title: string = "Shop";
  constructor() { }

  ngOnInit() {
  }

}
