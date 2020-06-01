import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-earn-edit-address',
  templateUrl: './earn-edit-address.page.html',
  styleUrls: ['./earn-edit-address.page.scss'],
})
export class EarnEditAddressPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSave(){
    console.log("save!");
  }
}
