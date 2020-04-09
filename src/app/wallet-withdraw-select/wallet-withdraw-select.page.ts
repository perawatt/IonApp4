import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wallet-withdraw-select',
  templateUrl: './wallet-withdraw-select.page.html',
  styleUrls: ['./wallet-withdraw-select.page.scss'],
})
export class WalletWithdrawSelectPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public onSelectWithdrawByMTM() {
    this.router.navigate(['/wallet-withdraw-detail-by-mtm'])  
  }

  public onSelectWithdrawByPromptpay() {
    this.router.navigate(['/wallet-topup-detail-by-mtm-info'])  
  }

}
