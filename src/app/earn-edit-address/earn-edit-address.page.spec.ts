import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EarnEditAddressPage } from './earn-edit-address.page';

describe('EarnEditAddressPage', () => {
  let component: EarnEditAddressPage;
  let fixture: ComponentFixture<EarnEditAddressPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarnEditAddressPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EarnEditAddressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
