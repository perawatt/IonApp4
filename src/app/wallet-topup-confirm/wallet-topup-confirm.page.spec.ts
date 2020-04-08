import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletTopupConfirmPage } from './wallet-topup-confirm.page';

describe('WalletTopupConfirmPage', () => {
  let component: WalletTopupConfirmPage;
  let fixture: ComponentFixture<WalletTopupConfirmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletTopupConfirmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletTopupConfirmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
