import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletTransactionPpayPaymentPage } from './wallet-transaction-ppay-payment.page';

describe('WalletTransactionPpayPaymentPage', () => {
  let component: WalletTransactionPpayPaymentPage;
  let fixture: ComponentFixture<WalletTransactionPpayPaymentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletTransactionPpayPaymentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletTransactionPpayPaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
