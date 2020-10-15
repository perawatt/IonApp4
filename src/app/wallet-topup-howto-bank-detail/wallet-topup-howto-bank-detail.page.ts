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
        { source: "assets/imgs/HowTo/MANA/2.3.png", type: this.sourceType.image },
        {
          source: [
            { source: "เข้าที่ App mana เพื่อส่งคำขอเติมเงิน", type: this.sourceType.text },
            { source: "กรอกข้อมูลให้ครบถ้วน", type: this.sourceType.disc },
            { source: "กด “ตกลง”", type: this.sourceType.disc },
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
        { source: "assets/imgs/HowTo/MANA/3.7.png", type: this.sourceType.image },
        {
          source: [
            { source: "ทำการเติมเงินเข้าสู่บัญชี mana สำเร็จ", type: this.sourceType.text },
            { source: "ได้รับการแจ้งเตือน “เติมเงินสำเร็จ”", type: this.sourceType.disc },
          ], type: this.sourceType.step
        },
      ]
    },
    {
      name: "กสิกรไทย", bankCode: "KBANK", detail: [
        { source: "ขั้นตอนที่ 1", type: this.sourceType.header },
        { source: "assets/imgs/HowTo/KBANK/1.5.jpg", type: this.sourceType.image },
        {
          source: [
            { source: "ทำการเปิด “เรียกเก็บเงิน” หรือ “Request to pay”", type: this.sourceType.text },
            { source: "เลือก “ตั้งค่า”", type: this.sourceType.disc },
            { source: "เลือก “บัญชี/บัตร”", type: this.sourceType.disc },
            { source: "ทำการเปิด", type: this.sourceType.disc },
          ], type: this.sourceType.step
        },
        { source: "ขั้นตอนที่ 2", type: this.sourceType.header },
        { source: "assets/imgs/HowTo/MANA/2.3.png", type: this.sourceType.image },
        {
          source: [
            { source: "เข้าที่ App mana เพื่อส่งคำขอเติมเงิน", type: this.sourceType.text },
            { source: "กรอกข้อมูลให้ครบถ้วน", type: this.sourceType.disc },
            { source: "กด “ตกลง”", type: this.sourceType.disc },
          ], type: this.sourceType.step
        },
        { source: "ขั้นตอนที่ 3", type: this.sourceType.header },
        { source: "assets/imgs/HowTo/KBANK/3.3.jpg", type: this.sourceType.image },
        {
          source: [
            { source: "เข้าสู่แอปพลิเคชัน ธนาคารกสิกรไทย", type: this.sourceType.text },
            { source: "มีข้อความแจ้งเตือนที่ App K PLUS", type: this.sourceType.disc },
            { source: "กดเข้าข้อความแจ้งเตือน", type: this.sourceType.disc },
            { source: "เลือก “โอนเงิน”", type: this.sourceType.disc },
            { source: "เลือก “ยืนยัน”", type: this.sourceType.disc },
          ], type: this.sourceType.step
        },
        { source: "ขั้นตอนที่ 4", type: this.sourceType.header },
        { source: "assets/imgs/HowTo/MANA/3.7.png", type: this.sourceType.image },
        {
          source: [
            { source: "ทำการเติมเงินเข้าสู่บัญชี mana สำเร็จ", type: this.sourceType.text },
            { source: "ได้รับการแจ้งเตือน “เติมเงินสำเร็จ”", type: this.sourceType.disc },
          ], type: this.sourceType.step
        },
      ]
    },
    {
      name: "ไทยพาณิชย์", bankCode: "SCB", detail: [
        {
          source: [
            //TODO: 1st step
            { source: "ขั้นตอนที่ 2", type: this.sourceType.header },
            { source: "assets/imgs/HowTo/MANA/2.3.png", type: this.sourceType.image },
            {
              source: [
                { source: "เข้าที่ App mana เพื่อส่งคำขอเติมเงิน", type: this.sourceType.text },
                { source: "กรอกข้อมูลให้ครบถ้วน", type: this.sourceType.disc },
                { source: "กด “ตกลง”", type: this.sourceType.disc },
              ], type: this.sourceType.step
            },
            //TODO: 3nd step
            { source: "ขั้นตอนที่ 4", type: this.sourceType.header },
            { source: "assets/imgs/HowTo/MANA/3.7.png", type: this.sourceType.image },
            {
              source: [
                { source: "ทำการเติมเงินเข้าสู่บัญชี mana สำเร็จ", type: this.sourceType.text },
                { source: "ได้รับการแจ้งเตือน “เติมเงินสำเร็จ”", type: this.sourceType.disc },
              ], type: this.sourceType.step
            },
          ], type: this.sourceType.step
        }
      ]
    },
    {
      name: "ทหารไทย", bankCode: "TMB", detail: [
        {
          source: [
            //TODO: 1st step
            { source: "ขั้นตอนที่ 2", type: this.sourceType.header },
            { source: "assets/imgs/HowTo/MANA/2.3.png", type: this.sourceType.image },
            {
              source: [
                { source: "เข้าที่ App mana เพื่อส่งคำขอเติมเงิน", type: this.sourceType.text },
                { source: "กรอกข้อมูลให้ครบถ้วน", type: this.sourceType.disc },
                { source: "กด “ตกลง”", type: this.sourceType.disc },
              ], type: this.sourceType.step
            },
            //TODO: 3nd step
            { source: "ขั้นตอนที่ 4", type: this.sourceType.header },
            { source: "assets/imgs/HowTo/MANA/3.7.png", type: this.sourceType.image },
            {
              source: [
                { source: "ทำการเติมเงินเข้าสู่บัญชี mana สำเร็จ", type: this.sourceType.text },
                { source: "ได้รับการแจ้งเตือน “เติมเงินสำเร็จ”", type: this.sourceType.disc },
              ], type: this.sourceType.step
            },
          ], type: this.sourceType.step
        }
      ]
    },
    {
      name: "กรุงศรีอยุธยา", bankCode: "BAY", detail: [
        {
          source: [
            //TODO: 1st step
            { source: "ขั้นตอนที่ 2", type: this.sourceType.header },
            { source: "assets/imgs/HowTo/MANA/2.3.png", type: this.sourceType.image },
            {
              source: [
                { source: "เข้าที่ App mana เพื่อส่งคำขอเติมเงิน", type: this.sourceType.text },
                { source: "กรอกข้อมูลให้ครบถ้วน", type: this.sourceType.disc },
                { source: "กด “ตกลง”", type: this.sourceType.disc },
              ], type: this.sourceType.step
            },
            //TODO: 3nd step
            { source: "ขั้นตอนที่ 4", type: this.sourceType.header },
            { source: "assets/imgs/HowTo/MANA/3.7.png", type: this.sourceType.image },
            {
              source: [
                { source: "ทำการเติมเงินเข้าสู่บัญชี mana สำเร็จ", type: this.sourceType.text },
                { source: "ได้รับการแจ้งเตือน “เติมเงินสำเร็จ”", type: this.sourceType.disc },
              ], type: this.sourceType.step
            },
          ], type: this.sourceType.step
        }
      ]
    },
    {
      name: "ธนชาต", bankCode: "TBANK", detail: [
        {
          source: [
            //TODO: 1st step
            { source: "ขั้นตอนที่ 2", type: this.sourceType.header },
            { source: "assets/imgs/HowTo/MANA/2.3.png", type: this.sourceType.image },
            {
              source: [
                { source: "เข้าที่ App mana เพื่อส่งคำขอเติมเงิน", type: this.sourceType.text },
                { source: "กรอกข้อมูลให้ครบถ้วน", type: this.sourceType.disc },
                { source: "กด “ตกลง”", type: this.sourceType.disc },
              ], type: this.sourceType.step
            },
            //TODO: 3nd step
            { source: "ขั้นตอนที่ 4", type: this.sourceType.header },
            { source: "assets/imgs/HowTo/MANA/3.7.png", type: this.sourceType.image },
            {
              source: [
                { source: "ทำการเติมเงินเข้าสู่บัญชี mana สำเร็จ", type: this.sourceType.text },
                { source: "ได้รับการแจ้งเตือน “เติมเงินสำเร็จ”", type: this.sourceType.disc },
              ], type: this.sourceType.step
            },
          ], type: this.sourceType.step
        }
      ]
    },
    {
      name: "ออนสิน", bankCode: "GSB", detail: [
        {
          source: [
            //TODO: 1st step
            { source: "ขั้นตอนที่ 2", type: this.sourceType.header },
            { source: "assets/imgs/HowTo/MANA/2.3.png", type: this.sourceType.image },
            {
              source: [
                { source: "เข้าที่ App mana เพื่อส่งคำขอเติมเงิน", type: this.sourceType.text },
                { source: "กรอกข้อมูลให้ครบถ้วน", type: this.sourceType.disc },
                { source: "กด “ตกลง”", type: this.sourceType.disc },
              ], type: this.sourceType.step
            },
            //TODO: 3nd step
            { source: "ขั้นตอนที่ 4", type: this.sourceType.header },
            { source: "assets/imgs/HowTo/MANA/3.7.png", type: this.sourceType.image },
            {
              source: [
                { source: "ทำการเติมเงินเข้าสู่บัญชี mana สำเร็จ", type: this.sourceType.text },
                { source: "ได้รับการแจ้งเตือน “เติมเงินสำเร็จ”", type: this.sourceType.disc },
              ], type: this.sourceType.step
            },
          ], type: this.sourceType.step
        }
      ]
    },
    {
      name: "กรุงเทพ", bankCode: "BBL", detail: [
        {
          source: [
            //TODO: 1st step
            { source: "ขั้นตอนที่ 2", type: this.sourceType.header },
            { source: "assets/imgs/HowTo/MANA/2.3.png", type: this.sourceType.image },
            {
              source: [
                { source: "เข้าที่ App mana เพื่อส่งคำขอเติมเงิน", type: this.sourceType.text },
                { source: "กรอกข้อมูลให้ครบถ้วน", type: this.sourceType.disc },
                { source: "กด “ตกลง”", type: this.sourceType.disc },
              ], type: this.sourceType.step
            },
            //TODO: 3nd step
            { source: "ขั้นตอนที่ 4", type: this.sourceType.header },
            { source: "assets/imgs/HowTo/MANA/3.7.png", type: this.sourceType.image },
            {
              source: [
                { source: "ทำการเติมเงินเข้าสู่บัญชี mana สำเร็จ", type: this.sourceType.text },
                { source: "ได้รับการแจ้งเตือน “เติมเงินสำเร็จ”", type: this.sourceType.disc },
              ], type: this.sourceType.step
            },
          ], type: this.sourceType.step
        }
      ]
    }
  ];
  constructor(private activatedRoute: ActivatedRoute, private svc: IonManaLib) { }

  ngOnInit() {
    //this.svc.initPageApi(this.mcontentid);
    let bankCode = this.activatedRoute.snapshot.paramMap.get('url');
    this.bankDetail = this.banklist.find(it => it.bankCode == bankCode);
    this.title = this.bankDetail.name;
  }
}
