import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletWithdrawCompletedPage } from './wallet-withdraw-completed.page';

describe('WalletWithdrawCompletedPage', () => {
  let component: WalletWithdrawCompletedPage;
  let fixture: ComponentFixture<WalletWithdrawCompletedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletWithdrawCompletedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletWithdrawCompletedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
