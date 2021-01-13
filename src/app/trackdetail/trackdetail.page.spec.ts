import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrackdetailPage } from './trackdetail.page';

describe('TrackdetailPage', () => {
  let component: TrackdetailPage;
  let fixture: ComponentFixture<TrackdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackdetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrackdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
