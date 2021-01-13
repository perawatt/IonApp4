import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SlidersdetailPage } from './slidersdetail.page';

describe('SlidersdetailPage', () => {
  let component: SlidersdetailPage;
  let fixture: ComponentFixture<SlidersdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidersdetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SlidersdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
