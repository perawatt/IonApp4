import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletTopupHowtoBankDetailPage } from './wallet-topup-howto-bank-detail.page';

describe('WalletTopupHowtoBankDetailPage', () => {
  let component: WalletTopupHowtoBankDetailPage;
  let fixture: ComponentFixture<WalletTopupHowtoBankDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletTopupHowtoBankDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletTopupHowtoBankDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
