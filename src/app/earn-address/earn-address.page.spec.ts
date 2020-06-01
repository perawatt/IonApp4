import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EarnAddressPage } from './earn-address.page';

describe('EarnAddressPage', () => {
  let component: EarnAddressPage;
  let fixture: ComponentFixture<EarnAddressPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarnAddressPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EarnAddressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
