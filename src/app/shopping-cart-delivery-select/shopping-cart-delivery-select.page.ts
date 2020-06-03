import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart-delivery-select',
  templateUrl: './shopping-cart-delivery-select.page.html',
  styleUrls: ['./shopping-cart-delivery-select.page.scss'],
})
export class ShoppingCartDeliverySelectPage implements OnInit {

  public hasLoaded: string;
  public title: string = "เลือกผู้จัดส่ง";
  constructor() { }

  ngOnInit() {
  }

}
