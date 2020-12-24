import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShortcutListPage } from './shortcut-list.page';

describe('ShortcutListPage', () => {
  let component: ShortcutListPage;
  let fixture: ComponentFixture<ShortcutListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortcutListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShortcutListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
