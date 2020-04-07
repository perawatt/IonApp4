import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FinancialMenuPage } from './financial-menu.page';

describe('FinancialMenuPage', () => {
  let component: FinancialMenuPage;
  let fixture: ComponentFixture<FinancialMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FinancialMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
