import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-earn-address',
  templateUrl: './earn-address.page.html',
  styleUrls: ['./earn-address.page.scss'],
})
export class EarnAddressPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelectEditAddress(){
    this.router.navigate(['/earn-edit-address'])
  }
  
}
