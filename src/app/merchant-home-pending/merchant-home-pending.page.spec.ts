import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MerchantHomePendingPage } from './merchant-home-pending.page';

describe('MerchantHomePendingPage', () => {
  let component: MerchantHomePendingPage;
  let fixture: ComponentFixture<MerchantHomePendingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantHomePendingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MerchantHomePendingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
