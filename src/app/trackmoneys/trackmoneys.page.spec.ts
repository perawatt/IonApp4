import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrackmoneysPage } from './trackmoneys.page';

describe('TrackmoneysPage', () => {
  let component: TrackmoneysPage;
  let fixture: ComponentFixture<TrackmoneysPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackmoneysPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrackmoneysPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
