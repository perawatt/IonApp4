import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletWithdrawConfirmPage } from './wallet-withdraw-confirm.page';

describe('WalletWithdrawConfirmPage', () => {
  let component: WalletWithdrawConfirmPage;
  let fixture: ComponentFixture<WalletWithdrawConfirmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletWithdrawConfirmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletWithdrawConfirmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
