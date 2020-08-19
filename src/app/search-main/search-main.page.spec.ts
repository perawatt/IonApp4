import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchMainPage } from './search-main.page';

describe('SearchMainPage', () => {
  let component: SearchMainPage;
  let fixture: ComponentFixture<SearchMainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchMainPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchMainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
