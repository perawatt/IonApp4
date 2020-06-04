import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-merchant-address',
  templateUrl: './merchant-address.page.html',
  styleUrls: ['./merchant-address.page.scss'],
})
export class MerchantAddressPage implements OnInit {

  public fg: FormGroup;
  constructor(private fb: FormBuilder) {
    this.fg = this.fb.group({
      // TODO : Binding
    });
  }

  ngOnInit() {
  }

}
