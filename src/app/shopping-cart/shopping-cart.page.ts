import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.page.html',
  styleUrls: ['./shopping-cart.page.scss'],
})
export class ShoppingCartPage implements OnInit {

  public hasLoaded: string;
  public title: string = "จ่ายเงิน";
  constructor() { }

  ngOnInit() {
  }

}
