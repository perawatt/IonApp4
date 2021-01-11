import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccountConfirmBankaccountPage } from './account-confirm-bankaccount.page';

describe('AccountConfirmBankaccountPage', () => {
  let component: AccountConfirmBankaccountPage;
  let fixture: ComponentFixture<AccountConfirmBankaccountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountConfirmBankaccountPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccountConfirmBankaccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
