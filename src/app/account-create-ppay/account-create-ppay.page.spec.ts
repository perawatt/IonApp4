import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccountCreatePpayPage } from './account-create-ppay.page';

describe('AccountCreatePpayPage', () => {
  let component: AccountCreatePpayPage;
  let fixture: ComponentFixture<AccountCreatePpayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountCreatePpayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccountCreatePpayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
