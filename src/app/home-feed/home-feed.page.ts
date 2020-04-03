import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-feed',
  templateUrl: './home-feed.page.html',
  styleUrls: ['./home-feed.page.scss'],
})
export class HomeFeedPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  slideOpts = {
    slidesPerView: 4
  }

}
