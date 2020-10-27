import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MerchantProfileImageEditPage } from './merchant-profile-image-edit.page';

describe('MerchantProfileImageEditPage', () => {
  let component: MerchantProfileImageEditPage;
  let fixture: ComponentFixture<MerchantProfileImageEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantProfileImageEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MerchantProfileImageEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
