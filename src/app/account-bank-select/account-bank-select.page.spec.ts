import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccountBankSelectPage } from './account-bank-select.page';

describe('AccountBankSelectPage', () => {
  let component: AccountBankSelectPage;
  let fixture: ComponentFixture<AccountBankSelectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountBankSelectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccountBankSelectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
