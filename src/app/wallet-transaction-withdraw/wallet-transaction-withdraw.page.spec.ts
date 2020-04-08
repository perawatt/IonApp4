import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletTransactionWithdrawPage } from './wallet-transaction-withdraw.page';

describe('WalletTransactionWithdrawPage', () => {
  let component: WalletTransactionWithdrawPage;
  let fixture: ComponentFixture<WalletTransactionWithdrawPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletTransactionWithdrawPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletTransactionWithdrawPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
