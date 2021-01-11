import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccountCreateSelectPage } from './account-create-select.page';

describe('AccountCreateSelectPage', () => {
  let component: AccountCreateSelectPage;
  let fixture: ComponentFixture<AccountCreateSelectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountCreateSelectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccountCreateSelectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
