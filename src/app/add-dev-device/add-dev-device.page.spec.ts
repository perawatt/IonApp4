import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddDevDevicePage } from './add-dev-device.page';

describe('AddDevDevicePage', () => {
  let component: AddDevDevicePage;
  let fixture: ComponentFixture<AddDevDevicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDevDevicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddDevDevicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
