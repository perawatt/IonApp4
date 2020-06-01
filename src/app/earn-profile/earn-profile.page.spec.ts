import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EarnProfilePage } from './earn-profile.page';

describe('EarnProfilePage', () => {
  let component: EarnProfilePage;
  let fixture: ComponentFixture<EarnProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarnProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EarnProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
