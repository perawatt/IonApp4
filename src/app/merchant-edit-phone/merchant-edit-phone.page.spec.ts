import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MerchantEditPhonePage } from './merchant-edit-phone.page';

describe('MerchantEditPhonePage', () => {
  let component: MerchantEditPhonePage;
  let fixture: ComponentFixture<MerchantEditPhonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantEditPhonePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MerchantEditPhonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
