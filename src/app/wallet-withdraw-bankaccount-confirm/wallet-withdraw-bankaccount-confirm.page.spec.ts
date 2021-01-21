import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletWithdrawBankaccountConfirmPage } from './wallet-withdraw-bankaccount-confirm.page';

describe('WalletWithdrawBankaccountConfirmPage', () => {
  let component: WalletWithdrawBankaccountConfirmPage;
  let fixture: ComponentFixture<WalletWithdrawBankaccountConfirmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletWithdrawBankaccountConfirmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletWithdrawBankaccountConfirmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
