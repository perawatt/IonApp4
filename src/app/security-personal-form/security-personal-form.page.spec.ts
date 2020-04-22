import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SecurityPersonalFormPage } from './security-personal-form.page';

describe('SecurityPersonalFormPage', () => {
  let component: SecurityPersonalFormPage;
  let fixture: ComponentFixture<SecurityPersonalFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityPersonalFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SecurityPersonalFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
