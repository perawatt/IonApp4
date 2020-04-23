import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletTransactionPpayTransferPage } from './wallet-transaction-ppay-transfer.page';

describe('WalletTransactionPpayTransferPage', () => {
  let component: WalletTransactionPpayTransferPage;
  let fixture: ComponentFixture<WalletTransactionPpayTransferPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletTransactionPpayTransferPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletTransactionPpayTransferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
