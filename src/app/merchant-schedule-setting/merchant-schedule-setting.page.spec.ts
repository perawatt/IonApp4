import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MerchantScheduleSettingPage } from './merchant-schedule-setting.page';

describe('MerchantScheduleSettingPage', () => {
  let component: MerchantScheduleSettingPage;
  let fixture: ComponentFixture<MerchantScheduleSettingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantScheduleSettingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MerchantScheduleSettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
