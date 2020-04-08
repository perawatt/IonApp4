import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletTopupDetailPage } from './wallet-topup-detail.page';

describe('WalletTopupDetailPage', () => {
  let component: WalletTopupDetailPage;
  let fixture: ComponentFixture<WalletTopupDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletTopupDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletTopupDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
