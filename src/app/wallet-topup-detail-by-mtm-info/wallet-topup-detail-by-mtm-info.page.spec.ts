import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletTopupDetailByMtmInfoPage } from './wallet-topup-detail-by-mtm-info.page';

describe('WalletTopupDetailByMtmInfoPage', () => {
  let component: WalletTopupDetailByMtmInfoPage;
  let fixture: ComponentFixture<WalletTopupDetailByMtmInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletTopupDetailByMtmInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletTopupDetailByMtmInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
