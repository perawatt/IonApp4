import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MerchantTopupPage } from './merchant-topup.page';

describe('MerchantTopupPage', () => {
  let component: MerchantTopupPage;
  let fixture: ComponentFixture<MerchantTopupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantTopupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MerchantTopupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
