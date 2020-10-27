import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GpsSelectAddressPage } from './gps-select-address.page';

describe('GpsSelectAddressPage', () => {
  let component: GpsSelectAddressPage;
  let fixture: ComponentFixture<GpsSelectAddressPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpsSelectAddressPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GpsSelectAddressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
