import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wallet-topup-select',
  templateUrl: './wallet-topup-select.page.html',
  styleUrls: ['./wallet-topup-select.page.scss'],
})
export class WalletTopupSelectPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public onSelectTopupByMTM() {
    this.router.navigate(['/wallet-topup-detail-by-mtm-info'])  
  }

  public onSelectTopupByPromptpay() {
    this.router.navigate(['/wallet-topup-detail'])
  }

}
