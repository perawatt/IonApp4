import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MerchantHomeBasicPage } from './merchant-home-basic.page';

describe('MerchantHomeBasicPage', () => {
  let component: MerchantHomeBasicPage;
  let fixture: ComponentFixture<MerchantHomeBasicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantHomeBasicPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MerchantHomeBasicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
