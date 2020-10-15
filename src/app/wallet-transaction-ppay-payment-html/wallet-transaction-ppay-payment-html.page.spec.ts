import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletTransactionPPayPaymentHTMLPage } from './wallet-transaction-ppay-payment-html.page';

describe('WalletTransactionPPayPaymentHTMLPage', () => {
  let component: WalletTransactionPPayPaymentHTMLPage;
  let fixture: ComponentFixture<WalletTransactionPPayPaymentHTMLPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletTransactionPPayPaymentHTMLPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletTransactionPPayPaymentHTMLPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
