import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletWithdrawDetailByMtmPage } from './wallet-withdraw-detail-by-mtm.page';

describe('WalletWithdrawDetailByMtmPage', () => {
  let component: WalletWithdrawDetailByMtmPage;
  let fixture: ComponentFixture<WalletWithdrawDetailByMtmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletWithdrawDetailByMtmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletWithdrawDetailByMtmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
