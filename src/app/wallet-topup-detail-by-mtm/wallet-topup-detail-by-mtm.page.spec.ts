import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletTopupDetailByMtmPage } from './wallet-topup-detail-by-mtm.page';

describe('WalletTopupDetailByMtmPage', () => {
  let component: WalletTopupDetailByMtmPage;
  let fixture: ComponentFixture<WalletTopupDetailByMtmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletTopupDetailByMtmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletTopupDetailByMtmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
