import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Sliders2Page } from './sliders2.page';

describe('Sliders2Page', () => {
  let component: Sliders2Page;
  let fixture: ComponentFixture<Sliders2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sliders2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Sliders2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
