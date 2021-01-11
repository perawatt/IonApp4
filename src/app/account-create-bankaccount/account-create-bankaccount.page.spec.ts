import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccountCreateBankaccountPage } from './account-create-bankaccount.page';

describe('AccountCreateBankaccountPage', () => {
  let component: AccountCreateBankaccountPage;
  let fixture: ComponentFixture<AccountCreateBankaccountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountCreateBankaccountPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccountCreateBankaccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
