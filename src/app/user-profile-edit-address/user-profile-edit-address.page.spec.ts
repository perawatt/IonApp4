import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserProfileEditAddressPage } from './user-profile-edit-address.page';

describe('UserProfileEditAddressPage', () => {
  let component: UserProfileEditAddressPage;
  let fixture: ComponentFixture<UserProfileEditAddressPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileEditAddressPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserProfileEditAddressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
