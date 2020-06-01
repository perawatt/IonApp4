import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-earn-profile',
  templateUrl: './earn-profile.page.html',
  styleUrls: ['./earn-profile.page.scss'],
})
export class EarnProfilePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelectShipping(){
    this.router.navigate(['/earn-address'])
  }

}
