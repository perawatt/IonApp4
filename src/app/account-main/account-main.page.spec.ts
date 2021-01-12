import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccountMainPage } from './account-main.page';

describe('AccountMainPage', () => {
  let component: AccountMainPage;
  let fixture: ComponentFixture<AccountMainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountMainPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccountMainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
