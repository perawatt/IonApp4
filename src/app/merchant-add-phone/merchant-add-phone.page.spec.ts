import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MerchantAddPhonePage } from './merchant-add-phone.page';

describe('MerchantAddPhonePage', () => {
  let component: MerchantAddPhonePage;
  let fixture: ComponentFixture<MerchantAddPhonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantAddPhonePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MerchantAddPhonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
