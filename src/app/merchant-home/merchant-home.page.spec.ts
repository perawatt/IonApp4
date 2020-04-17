import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MerchantHomePage } from './merchant-home.page';

describe('MerchantHomePage', () => {
  let component: MerchantHomePage;
  let fixture: ComponentFixture<MerchantHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MerchantHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
