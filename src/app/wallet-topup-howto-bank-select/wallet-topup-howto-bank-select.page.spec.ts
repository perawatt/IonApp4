import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletTopupHowtoBankSelectPage } from './wallet-topup-howto-bank-select.page';

describe('WalletTopupHowtoBankSelectPage', () => {
  let component: WalletTopupHowtoBankSelectPage;
  let fixture: ComponentFixture<WalletTopupHowtoBankSelectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletTopupHowtoBankSelectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletTopupHowtoBankSelectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
