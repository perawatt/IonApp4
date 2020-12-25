import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletTopupCompleteQrPage } from './wallet-topup-complete-qr.page';

describe('WalletTopupCompleteQrPage', () => {
  let component: WalletTopupCompleteQrPage;
  let fixture: ComponentFixture<WalletTopupCompleteQrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletTopupCompleteQrPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletTopupCompleteQrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
