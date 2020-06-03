import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GpsaddressSelectLocationPage } from './gpsaddress-select-location.page';

describe('GpsaddressSelectLocationPage', () => {
  let component: GpsaddressSelectLocationPage;
  let fixture: ComponentFixture<GpsaddressSelectLocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpsaddressSelectLocationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GpsaddressSelectLocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
