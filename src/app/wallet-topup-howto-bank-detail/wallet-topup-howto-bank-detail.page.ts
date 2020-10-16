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
  public sourceType = { image: "image", header: "header", text: "text", disc: "disc" };
  public manaSteps = [
    {
      source: "2.ขอเติมเงินที่ mana", step: [
        { source: "2.1 ทำการสแกน QR เพื่อไปหน้าเติมเงิน", type: this.sourceType.text },
        { source: "assets/imgs/HowTo/MANA/2.1.png", type: this.sourceType.image },
        { source: "2.2 เข้าสู่หน้าเติมเงิน อย่าลืม ปัก Pin ไว้นะจ๊ะ ครั้งต่อไปจะได้ไม่ต้องสแกนอีก กดเติมได้เลย", type: this.sourceType.text },
        { source: "assets/imgs/HowTo/MANA/2.2.png", type: this.sourceType.image },
        { source: "2.3 ทำการกรอกข้อมูลและกดยืนยัน", type: this.sourceType.text },
        { source: "assets/imgs/HowTo/MANA/2.3.png", type: this.sourceType.image },
        { source: "2.4 ทำการกรอกยอดเงินที่ต้องการเติมเข้า mana wallet", type: this.sourceType.text },
        { source: "assets/imgs/HowTo/MANA/2.4.png", type: this.sourceType.image },
        { source: "2.5 ยืนยันการเติมเงิน", type: this.sourceType.text },
        { source: "assets/imgs/HowTo/MANA/2.5.png", type: this.sourceType.image },
        { source: "2.6 ส่งคำขอเติมเงินไปยังบัญชี แอปพลิเคชันธนาคาร", type: this.sourceType.text },
        { source: "assets/imgs/HowTo/MANA/2.6.png", type: this.sourceType.image },
      ]
    }
  ];
  public banklist = [
    {
      name: "กรุงไทย", bankCode: "KTB", detail: [
        {
          source: "1.ทำการเปิดเตือนเพื่อจ่าย (หากเปิดแล้ว ข้ามขั้นตอนนี้ไป ข้อ 2)", step: [
            { source: "1.1 เข้าแอปพลิเคชัน ธนาคารกรุงไทย (ทำเพียงครั้งแรก ครั้งเดียวเท่านั่น)", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/KTB/1.1.jpg", type: this.sourceType.image },
            { source: "1.2 เลือก “บริการพร้อมเพย์”", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/KTB/1.2.jpg", type: this.sourceType.image },
            { source: "1.3 เลือกพร้อมเพย์ ที่ต้องการผูกเตือนเพื่อจ่าย", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/KTB/1.3.jpg", type: this.sourceType.image },
            { source: "1.4 เปิด “เตือนเพื่อจ่าย” และ เลือก “บันทึก”", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/KTB/1.4.jpg", type: this.sourceType.image },
            { source: "1.5 ทำการเปิดเรียบร้อยแล้ว", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/KTB/1.5.jpg", type: this.sourceType.image }
          ]
        },
        this.manaSteps[0],
        {
          source: "3.ขั้นตอนยืนยันการเติมเงิน", step: [
            { source: "3.1 มีข้อความแจ้งเตือนเรียกเก็บเงิน จาก mana wallet เข้าแอปพลิเคชัน กรุงไทย เลือกเมนู “แจ้งเตือน”", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/KTB/3.1.jpg", type: this.sourceType.image },
            { source: "3.2 เลือกรายการ “เรียกเก็บเงิน” จาก mana wallet", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/KTB/3.2.jpg", type: this.sourceType.image },
            { source: "3.3 จะมีหน้ารายละเอียดแจ้งเตือน เลือก “ทำรายการ”", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/KTB/3.3.jpg", type: this.sourceType.image },
            { source: "3.4 เลือกบัญชี ที่ต้องจ่ายเงิน แล้วกด “ถัดไป”", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/KTB/3.4.jpg", type: this.sourceType.image },
            { source: "3.5 เลือก “โอนเงิน”", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/KTB/3.5.jpg", type: this.sourceType.image },
            { source: "3.6 เลือก “ยืนยัน” แล้วใส่ PIN", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/KTB/3.6.jpg", type: this.sourceType.image },
            { source: "3.7 ข้อความแจ้งเตือนการเติมเงินสำเร็จจาก mana wallet", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/MANA/3.png", type: this.sourceType.image },
          ]
        },
      ]
    },
    {
      name: "กสิกรไทย", bankCode: "KBANK", detail: [
        {
          source: "1.ทำการเปิดเตือนเพื่อจ่าย (หากเปิดแล้ว ข้ามขั้นตอนนี้ไป ข้อ 2)", step: [
            { source: "1.1 เข้าแอปพลิเคชัน กสิกรไทย เลือก เมนู “อื่นๆ” (ทำเพียงครั้งแรก ครั้งเดียวเท่านั่น)", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/KBANK/1.1.jpg", type: this.sourceType.image },
            { source: "1.2 เลือก “ตั้งค่า”", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/KBANK/1.2.jpg", type: this.sourceType.image },
            { source: "1.3 เลือก “บัญชี/บัตร”", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/KBANK/1.3.jpg", type: this.sourceType.image },
            { source: "1.4 เปิด “บริการเรียกเก็บเงิน”", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/KBANK/1.4.jpg", type: this.sourceType.image },
            { source: "1.5 ทำการเปิดบริการเก็บเงิน เรียบร้อยแล้ว", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/KBANK/1.5.jpg", type: this.sourceType.image }
          ]
        },
        this.manaSteps[0],
        {
          source: "3.ขั้นตอนยืนยันการเติมเงิน", step: [
            { source: "3.1 มีข้อความแจ้งเตือนเรียกเก็บเงิน จาก mana wallet หรือเข้าแอปพลิเคชัน กสิกรไทย เลือกรูปกระดิ่ง", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/KBANK/3.1.jpg", type: this.sourceType.image },
            { source: "3.2 เลือกรายการคำขอจาก mana wallet", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/KBANK/3.2.jpg", type: this.sourceType.image },
            { source: "3.3 เลือก “โอนเงิน” เพื่อยืนยันเติมเงิน เข้าสู่ mana wallet", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/KBANK/3.3.jpg", type: this.sourceType.image },
            { source: "3.4 ข้อความแจ้งเตือนการเติมเงินสำเร็จจาก mana wallet", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/MANA/3.png", type: this.sourceType.image },
          ]
        },
      ]
    },
    {
      name: "ไทยพาณิชย์", bankCode: "SCB", detail: [
        {
          source: "1.ทำการเปิดเตือนเพื่อจ่าย (หากเปิดแล้ว ข้ามขั้นตอนนี้ไป ข้อ 2)", step: [
            { source: "1.1 เข้าแอปพลิเคชันธนาคาร เลือก เมนุตรงกลาง (ทำเพียงครั้งแรก ครั้งเดียวเท่านั่น)", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/SCB/1.1.jpg", type: this.sourceType.image },
            { source: "1.2 กดเลือก “เตือนเพื่อจ่าย”", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/SCB/1.2.jpg", type: this.sourceType.image },
            { source: "1.3 หากยังไม่เปิดเตือนเพื่อจ่ายมาก่อน จะแสดงหน้าดังนี้ กดไปที่ “ไปที่การตั้งค่า”", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/SCB/1.3.jpg", type: this.sourceType.image },
            { source: "1.4 กด เปิด เตือนเพื่อจ่าย", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/SCB/1.4.jpg", type: this.sourceType.image },
            { source: "1.5 เปิดสำเร็จจะขึ้นหน้าดังภาพ", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/SCB/1.5.jpg", type: this.sourceType.image },
          ]
        },
        this.manaSteps[0],
        {
          source: "3.ขั้นตอนยืนยันการเติมเงิน", step: [
            { source: "3.1 มีข้อความแจ้งเตือนเข้ามาที่หน้าแรก หรือสามารถเข้ามาดูแจ้งเตือนได้ที่ แอปธนาคารไทยพาณิชย์", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/SCB/3.1.1.jpg", type: this.sourceType.image },
            { source: "assets/imgs/HowTo/SCB/3.1.2.jpg", type: this.sourceType.image },
            { source: "3.2 เลือกรายการคำขอจาก mana wallet เลือก “จ่ายเงิน”", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/SCB/3.2.jpg", type: this.sourceType.image },
            { source: "3.3 กด “ยืนยัน” เพื่อเติมเงินเข้าสู่ mana wallet", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/SCB/3.3.jpg", type: this.sourceType.image },
            { source: "3.4 สลิปยืนยันการเติมเงิน", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/SCB/3.4.jpg", type: this.sourceType.image },
            { source: "3.5 ข้อความแจ้งเตือนการเติมเงินสำเร็จจาก mana wallet", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/MANA/3.png", type: this.sourceType.image },
          ]
        },
      ]
    },
    {
      name: "ทหารไทย", bankCode: "TMB", detail: [
        {
          source: "1.ทำการเปิดเตือนเพื่อจ่าย (หากเปิดแล้ว ข้ามขั้นตอนนี้ไป ข้อ 2)", step: [
            { source: "1.1 เข้าแอปพลิเคชัน ธนาคาร TMB เลือก “เตือนเพื่อจ่าย” (ทำเพียงครั้งแรก ครั้งเดียวเท่านั่น)", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/TMB/1.1.jpg", type: this.sourceType.image },
            { source: "1.2 ทำการกดตั้งค่า ที่รูป เฟือง", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/TMB/1.2.jpg", type: this.sourceType.image },
            { source: "1.3 ติ๊กเครื่องหมาย เพื่อเปิดการใช้งาน", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/TMB/1.3.jpg", type: this.sourceType.image },
          ]
        },
        this.manaSteps[0],
        {
          source: "3.ขั้นตอนยืนยันการเติมเงิน", step: [
            { source: "3.1 มีข้อความแจ้งเตือนเรียกเก็บเงิน จาก mana wallet เข้าแอปพลิเคชัน ธนาคารTMB เลือก เตือนเพื่อจ่าย", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/TMB/3.1.jpg", type: this.sourceType.image },
            { source: "3.2 เลือกรายการ จาก mana wallet", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/TMB/3.2.jpg", type: this.sourceType.image },
            { source: "3.3 ทำการเลือก “ยืนยัน” เพื่อโอนเงินเข้าสู่ mana wallet", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/TMB/3.3.jpg", type: this.sourceType.image },
            { source: "3.4 โอนเงินเข้าสู่ mana wallet สำเร็จ", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/TMB/3.4.jpg", type: this.sourceType.image },
            { source: "3.5 ข้อความแจ้งเตือนการเติมเงินสำเร็จจาก mana wallet", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/MANA/3.png", type: this.sourceType.image },
          ]
        },
      ]
    },
    {
      name: "กรุงศรีอยุธยา", bankCode: "BAY", detail: [
        {
          source: "1.ทำการเปิดเตือนเพื่อจ่าย (หากเปิดแล้ว ข้ามขั้นตอนนี้ไป ข้อ 2)", step: [
            { source: "1.1 เข้าแอปพลิเคชัน ธนาคารกรุงศรี เลือก “เมนูทั้งหมด” (ทำเพียงครั้งแรก ครั้งเดียวเท่านั่น)", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/BAY/1.1.jpg", type: this.sourceType.image },
            { source: "1.2 เลือก “เตือนเพื่อจ่าย”", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/BAY/1.2.jpg", type: this.sourceType.image },
            { source: "1.3 เลือก “ลงทะเบียน”", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/BAY/1.3.jpg", type: this.sourceType.image },
            { source: "1.4 ติ๊กเครื่องหมายถูก ที่หมายเลขพร้อมเพย์ ที่ผูกไว้ กด “ถัดไป”", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/BAY/1.4.jpg", type: this.sourceType.image },
            { source: "1.5 ทำการยืนยันรายการ  กด “ถัดไป”", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/BAY/1.5.jpg", type: this.sourceType.image },
            { source: "1.6 ลงทะเบียนสำเร็จ กด “เสร็จสิ้น”", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/BAY/1.6.jpg", type: this.sourceType.image },
          ]
        },
        this.manaSteps[0],
        {
          source: "3.ขั้นตอนยืนยันการเติมเงิน", step: [
            { source: "3.1 มีข้อความแจ้งเตือนเรียกเก็บเงิน จาก mana wallet หากไม่มีข้อความ เข้าแอปพลิเคชัน กรุงศรี เลือก “เมนูทั้งหมด”", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/BAY/3.1.jpg", type: this.sourceType.image },
            { source: "3.2 เลือก “เตือนเพื่อจ่าย”", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/BAY/3.2.jpg", type: this.sourceType.image },
            { source: "3.3 เลือก “รายการถูกเรียกเก็บให้ชำระเงิน”", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/BAY/3.3.jpg", type: this.sourceType.image },
            { source: "3.4 เลือกรายการ จาก mana wallet", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/BAY/3.4.jpg", type: this.sourceType.image },
            { source: "3.5 เลือก “โอนเงิน”", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/BAY/3.5.jpg", type: this.sourceType.image },
            { source: "3.6 เลือก “ยืนยัน” เพื่อยืนยันการทำรายการ", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/BAY/3.6.jpg", type: this.sourceType.image },
            { source: "3.7 โอนเงินสำเร็จ", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/BAY/3.7.jpg", type: this.sourceType.image },
            { source: "3.8 ข้อความแจ้งเตือนการเติมเงินสำเร็จจาก mana wallet", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/MANA/3.png", type: this.sourceType.image },
          ]
        },
      ]
    },
    {
      name: "ธนชาต", bankCode: "TBANK", detail: [
        {
          source: "1.ทำการเปิดเตือนเพื่อจ่าย (หากเปิดแล้ว ข้ามขั้นตอนนี้ไป ข้อ 2)", step: [
            { source: "1.1 เข้าแอปพลิเคชัน ธนาคารธนชาต เลือก “บริการอื่นๆ”", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/TBANK/1.1.jpg", type: this.sourceType.image },
            { source: "1.2 เลือก “เตือนเพื่อจ่าย”", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/TBANK/1.2.jpg", type: this.sourceType.image },
            { source: "1.3 เลือกตั้งค่า มุมขวาบน (รูปเฟือง)", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/TBANK/1.3.jpg", type: this.sourceType.image },
            { source: "1.4 เลือก “ยินยอม”", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/TBANK/1.4.jpg", type: this.sourceType.image },
            { source: "1.5 ติ๊ก ยอมรับเงื่อนไข และ เลือก “ถัดไป”", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/TBANK/1.5.jpg", type: this.sourceType.image },
            { source: "1.6 เลื่อน เปิด และ เลือก “บันทึก”", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/TBANK/1.6.jpg", type: this.sourceType.image },
          ]
        },
        this.manaSteps[0],
        {
          source: "3.ขั้นตอนยืนยันการเติมเงิน", step: [
            { source: "3.1 มีข้อความแจ้งเตือนเรียกเก็บเงิน จาก mana wallet เข้าแอปพลิเคชัน ธนชาต เลือก “บริการอื่นๆ”", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/TBANK/3.1.jpg", type: this.sourceType.image },
            { source: "3.2 เลือก “เตือนเพื่อจ่าย”", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/TBANK/3.2.jpg", type: this.sourceType.image },
            { source: "3.3 เลือกรายการ จาก mana wallet เลือก  “ชำระ”", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/TBANK/3.3.jpg", type: this.sourceType.image },
            { source: "3.4 จะแสดงหน้าโอนเงิน ให้เลือก “ถัดไป”", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/TBANK/3.4.jpg", type: this.sourceType.image },
            { source: "3.5 เลือก “ยืนยัน” เพื่อยืนยันการโอน", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/TBANK/3.5.jpg", type: this.sourceType.image },
            { source: "3.6 ทำการโอนเงินเข้าสู่ mana wallet สำเร็จ", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/TBANK/3.6.jpg", type: this.sourceType.image },
            { source: "3.7 ข้อความแจ้งเตือนการเติมเงินสำเร็จจาก mana wallet", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/MANA/3.png", type: this.sourceType.image },
          ]
        },
      ]
    },
    {
      name: "ออนสิน", bankCode: "GSB", detail: [
        {
          source: "1.ทำการเปิดเตือนเพื่อจ่าย (หากเปิดแล้ว ข้ามขั้นตอนนี้ไป ข้อ 2)", step: [
            { source: "1.1 เข้าแอปพลิเคชัน ธนาคารออมสิน เลือก สัญลักษณ์ที่มี 3 ขีด (ทำเพียงครั้งแรก ครั้งเดียวเท่านั่น)", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/GSB/1.1.jpg", type: this.sourceType.image },
            { source: "1.2 เลือก “เตือนเพื่อจ่าย”", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/GSB/1.2.jpg", type: this.sourceType.image },
            { source: "1.3 เลือก “สมัครบริการเตือนเพื่อจ่าย”", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/GSB/1.3.jpg", type: this.sourceType.image },
            { source: "1.4 เปิดเตือนเพื่อจ่ายสำเร็จ", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/GSB/1.4.jpg", type: this.sourceType.image },
          ]
        },
        this.manaSteps[0],
        {
          source: "3.ขั้นตอนยืนยันการเติมเงิน", step: [
            { source: "3.1 มีข้อความแจ้งเตือนเรียกเก็บเงิน จาก mana wallet เข้าแอปพลิเคชัน ธนาคารออมสิน เลือก ข้อความที่ยังไม่ได้อ่าน หรือ เตือนเพื่อจ่าย", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/GSB/3.1.jpg", type: this.sourceType.image },
            { source: "3.2 เลือกรายการ จาก mana wallet", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/GSB/3.2.jpg", type: this.sourceType.image },
            { source: "3.3 ทำการ เลื่อนเพื่อส่ง", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/GSB/3.3.jpg", type: this.sourceType.image },
            { source: "3.4 ยืนยันข้อมูลการทำรายการ เลือก “ยืนยันและส่ง”", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/GSB/3.4.jpg", type: this.sourceType.image },
            { source: "3.5 ทำรายการ เติมเงินเข้าสู่ mana wallet สำเร็จ", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/GSB/3.5.jpg", type: this.sourceType.image },
            { source: "3.6 ข้อความแจ้งเตือนการเติมเงินสำเร็จจาก mana wallet", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/MANA/3.png", type: this.sourceType.image },
          ]
        },
      ]
    },
    {
      name: "กรุงเทพ", bankCode: "BBL", detail: [
        {
          source: "1.ทำการเปิดเตือนเพื่อจ่าย (หากเปิดแล้ว ข้ามขั้นตอนนี้ไป ข้อ 2)", step: [
            { source: "1.1 เข้าแอปพลิเคชัน ธนาคารกรุงเทพ เลือกเมนู “เพิ่มเติม” (ทำเพียงครั้งแรก ครั้งเดียวเท่านั่น)", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/BBL/1.1.jpg", type: this.sourceType.image },
            { source: "1.2 เลือก “ตั้งค่าพร้อมเพย์/เตือนเพื่อจ่าย”", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/BBL/1.2.jpg", type: this.sourceType.image },
            { source: "1.3 เลือก “Yes” ที่หัวข้อ เปิดใช้บริการเตือนเพื่อจ่ายแล้วยืนยัน เลือก “ลงทะเบียนพร้อมเพย์”", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/BBL/1.3.jpg", type: this.sourceType.image },
          ]
        },
        this.manaSteps[0],
        {
          source: "3.ขั้นตอนยืนยันการเติมเงิน", step: [
            { source: "3.1 มีข้อความแจ้งเตือนเรียกเก็บเงิน จาก mana wallet เข้าแอปพลิเคชัน กรุงเทพ เลือกรูปกล่องจดหมาย ที่อยู่ มุมซ้ายด้านบน", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/BBL/3.1.jpg", type: this.sourceType.image },
            { source: "3.2 เลือก รายการที่ถูกส่งจาก mana Wallet ตรงรอจ่ายเงิน", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/BBL/3.2.jpg", type: this.sourceType.image },
            { source: "3.3 เลือก “จ่ายเงิน”", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/BBL/3.3.jpg", type: this.sourceType.image },
            { source: "3.4 เลือก “ต้องการ”", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/BBL/3.4.jpg", type: this.sourceType.image },
            { source: "3.5 ทำการเติมเงิน เข้า mana wallet สำเร็จ", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/BBL/3.5.jpg", type: this.sourceType.image },
            { source: "3.6 ข้อความแจ้งเตือนการเติมเงินสำเร็จจาก mana wallet", type: this.sourceType.text },
            { source: "assets/imgs/HowTo/MANA/3.png", type: this.sourceType.image },
          ]
        },
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

  startWith(source: string) {
    return source.startsWith("2.6");
  }
}
