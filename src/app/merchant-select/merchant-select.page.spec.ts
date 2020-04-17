import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MerchantSelectPage } from './merchant-select.page';

describe('MerchantSelectPage', () => {
  let component: MerchantSelectPage;
  let fixture: ComponentFixture<MerchantSelectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantSelectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MerchantSelectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
