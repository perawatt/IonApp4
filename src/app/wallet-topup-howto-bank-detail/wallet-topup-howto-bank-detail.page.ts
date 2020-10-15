import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-wallet-topup-howto-bank-detail',
  templateUrl: './wallet-topup-howto-bank-detail.page.html',
  styleUrls: ['./wallet-topup-howto-bank-detail.page.scss'],
})
export class WalletTopupHowtoBankDetailPage implements OnInit {

  private mcontentid = "wallet-topup-howto-bank-detail";
  public title = "วิธีเติมเงินผ่านธนาคาร";
  public bankDetail;
  public sourceType = { image: "image", header: "header", step: "step", text: "text", disc: "disc" };
  public banklist = [
    {
      name: "กรุงไทย", bankCode: "KTB", detail: [
        { source: "ขั้นตอนที่ 1", type: this.sourceType.header },
        { source: "assets/imgs/HowTo/KTB/1.5.jpg", type: this.sourceType.image },
        {
          source: [
            { source: "ทำการเปิด “เตือนเพื่อจ่าย” หรือ “payAlert”", type: this.sourceType.text },
            { source: "เลือกเมนู “บริการ”", type: this.sourceType.disc },
            { source: "เลือก “บริการพร้อมเพย์”", type: this.sourceType.disc },
            { source: "เลือก “พร้อมเพย์”", type: this.sourceType.disc },
            { source: "เปิด “เตือนเพื่อจ่าย”", type: this.sourceType.disc },
          ], type: this.sourceType.step
        },
        { source: "ขั้นตอนที่ 2", type: this.sourceType.header },
        { source: "assets/imgs/HowTo/KTB/2.3.png", type: this.sourceType.image },
        {
          source: [
            { source: "เข้าที่ App mana เพื่อส่งคำขอเติมเงิน", type: this.sourceType.text },
          ], type: this.sourceType.step
        },
        { source: "ขั้นตอนที่ 3", type: this.sourceType.header },
        { source: "assets/imgs/HowTo/KTB/3.6.jpg", type: this.sourceType.image },
        {
          source: [
            { source: "มีข้อความแจ้งเตือนที่ App Next", type: this.sourceType.disc },
            { source: "เลือก “แจ้งเตือน”", type: this.sourceType.disc },
            { source: "เลือกรายการ จาก mana", type: this.sourceType.disc },
            { source: "เลือก “ทำรายการ”", type: this.sourceType.disc },
            { source: "เลือก “ถัดไป”", type: this.sourceType.disc },
            { source: "เลือก “โอนเงิน”", type: this.sourceType.disc },
            { source: "เลือก “ยืนยัน”", type: this.sourceType.disc },
            { source: "ใส่ PIN เพื่อยืนยันการทำรายการ", type: this.sourceType.disc },
          ], type: this.sourceType.step
        },
        { source: "ขั้นตอนที่ 4", type: this.sourceType.header },
        { source: "assets/imgs/HowTo/KTB/3.7.png", type: this.sourceType.image },
        {
          source: [
            { source: "ทำการเติมเงินเข้าสู่บัญชี mana สำเร็จ", type: this.sourceType.text },
            { source: "ได้รับการแจ้งเตือน “เติมเงินสำเร็จ”", type: this.sourceType.disc },
          ], type: this.sourceType.step
        },
      ]
    },
    { name: "กสิกรไทย", bankCode: "KBANK" },
    { name: "ไทยพาณิชย์", bankCode: "SCB" },
    { name: "ทหารไทย", bankCode: "TMB" },
    { name: "กรุงศรีอยุธยา", bankCode: "BAY" },
    { name: "ธนชาต", bankCode: "TBANK" },
    { name: "ออนสิน", bankCode: "GSB" },
    { name: "กรุงเทพ", bankCode: "BBL" }
  ];
  constructor(private activatedRoute: ActivatedRoute, private svc: IonManaLib) { }

  ngOnInit() {
    //this.svc.initPageApi(this.mcontentid);
    let bankCode = this.activatedRoute.snapshot.paramMap.get('url');
    this.bankDetail = this.banklist.find(it => it.bankCode == bankCode);
    this.title = this.bankDetail.name;
  }
}
