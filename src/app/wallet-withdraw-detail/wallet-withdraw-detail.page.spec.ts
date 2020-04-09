import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletWithdrawDetailPage } from './wallet-withdraw-detail.page';

describe('WalletWithdrawDetailPage', () => {
  let component: WalletWithdrawDetailPage;
  let fixture: ComponentFixture<WalletWithdrawDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletWithdrawDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletWithdrawDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
