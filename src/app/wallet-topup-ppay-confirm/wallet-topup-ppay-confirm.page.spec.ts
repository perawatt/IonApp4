import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletTopupPpayConfirmPage } from './wallet-topup-ppay-confirm.page';

describe('WalletTopupPpayConfirmPage', () => {
  let component: WalletTopupPpayConfirmPage;
  let fixture: ComponentFixture<WalletTopupPpayConfirmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletTopupPpayConfirmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletTopupPpayConfirmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
