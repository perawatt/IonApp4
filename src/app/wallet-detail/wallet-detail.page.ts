import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet-detail',
  templateUrl: './wallet-detail.page.html',
  styleUrls: ['./wallet-detail.page.scss'],
})
export class WalletDetailPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getActionDisplay(txType: string) {
    switch (txType.toLowerCase()) {
      case "paycart": return "ซื้อของ";
      case "payback": return "เงินเข้าบัญชี";
      case "deposit": return "เติมเงิน";
      case "withdraw": return "ถอนเงิน";
      case "receivemoney": return "เงินเข้าบัญชี";
      case "withdraw2mct": return "โอนเงิน";
      case "withdrawfrommct": return "เงินเข้าบัญชี";
      default: return "";
    }
  }
  
  getActionImage(txType: string) {
    switch (txType.toLowerCase()) {
      case "paycart": return "assets/imgs/txshop.png";
      case "payback": return "assets/imgs/txrin.png";
      case "deposit": return "assets/imgs/txdeposit.png";
      case "withdraw": return "assets/imgs/txwithdraw.png";
      case "receivemoney": return "assets/imgs/txrin.png";
      case "withdraw2mct": return "assets/imgs/txrout.png";
      case "withdrawfrommct": return "assets/imgs/txrin.png";
      default: return "";
    }
  }
}
