import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EarnHomePage } from './earn-home.page';

describe('EarnHomePage', () => {
  let component: EarnHomePage;
  let fixture: ComponentFixture<EarnHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarnHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EarnHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
