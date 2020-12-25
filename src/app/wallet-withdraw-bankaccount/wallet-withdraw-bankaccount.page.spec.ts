import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletWithdrawBankaccountPage } from './wallet-withdraw-bankaccount.page';

describe('WalletWithdrawBankaccountPage', () => {
  let component: WalletWithdrawBankaccountPage;
  let fixture: ComponentFixture<WalletWithdrawBankaccountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletWithdrawBankaccountPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletWithdrawBankaccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
