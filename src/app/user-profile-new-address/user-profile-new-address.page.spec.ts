import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserProfileNewAddressPage } from './user-profile-new-address.page';

describe('UserProfileNewAddressPage', () => {
  let component: UserProfileNewAddressPage;
  let fixture: ComponentFixture<UserProfileNewAddressPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileNewAddressPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserProfileNewAddressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
