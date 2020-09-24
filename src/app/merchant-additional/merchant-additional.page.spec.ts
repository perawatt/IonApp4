import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MerchantAdditionalPage } from './merchant-additional.page';

describe('MerchantAdditionalPage', () => {
  let component: MerchantAdditionalPage;
  let fixture: ComponentFixture<MerchantAdditionalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantAdditionalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MerchantAdditionalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
