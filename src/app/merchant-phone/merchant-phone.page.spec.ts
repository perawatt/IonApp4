import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MerchantPhonePage } from './merchant-phone.page';

describe('MerchantPhonePage', () => {
  let component: MerchantPhonePage;
  let fixture: ComponentFixture<MerchantPhonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantPhonePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MerchantPhonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
