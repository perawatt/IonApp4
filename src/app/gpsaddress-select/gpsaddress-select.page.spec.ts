import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GpsaddressSelectPage } from './gpsaddress-select.page';

describe('GpsaddressSelectPage', () => {
  let component: GpsaddressSelectPage;
  let fixture: ComponentFixture<GpsaddressSelectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpsaddressSelectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GpsaddressSelectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
