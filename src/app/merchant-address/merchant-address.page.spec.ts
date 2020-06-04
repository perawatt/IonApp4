import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MerchantAddressPage } from './merchant-address.page';

describe('MerchantAddressPage', () => {
  let component: MerchantAddressPage;
  let fixture: ComponentFixture<MerchantAddressPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantAddressPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MerchantAddressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
