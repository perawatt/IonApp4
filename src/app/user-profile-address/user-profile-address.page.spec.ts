import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserProfileAddressPage } from './user-profile-address.page';

describe('UserProfileAddressPage', () => {
  let component: UserProfileAddressPage;
  let fixture: ComponentFixture<UserProfileAddressPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileAddressPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserProfileAddressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
