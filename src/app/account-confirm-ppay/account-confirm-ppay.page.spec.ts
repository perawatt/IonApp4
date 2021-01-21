import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccountConfirmPpayPage } from './account-confirm-ppay.page';

describe('AccountConfirmPpayPage', () => {
  let component: AccountConfirmPpayPage;
  let fixture: ComponentFixture<AccountConfirmPpayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountConfirmPpayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccountConfirmPpayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
