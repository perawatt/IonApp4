import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GpsaddressChangePage } from './gpsaddress-change.page';

describe('GpsaddressChangePage', () => {
  let component: GpsaddressChangePage;
  let fixture: ComponentFixture<GpsaddressChangePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpsaddressChangePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GpsaddressChangePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
