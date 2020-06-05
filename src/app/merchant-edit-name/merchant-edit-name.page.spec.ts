import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MerchantEditNamePage } from './merchant-edit-name.page';

describe('MerchantEditNamePage', () => {
  let component: MerchantEditNamePage;
  let fixture: ComponentFixture<MerchantEditNamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantEditNamePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MerchantEditNamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
