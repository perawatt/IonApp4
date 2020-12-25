import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletTopupBankaccountConfirmPage } from './wallet-topup-bankaccount-confirm.page';

describe('WalletTopupBankaccountConfirmPage', () => {
  let component: WalletTopupBankaccountConfirmPage;
  let fixture: ComponentFixture<WalletTopupBankaccountConfirmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletTopupBankaccountConfirmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletTopupBankaccountConfirmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
