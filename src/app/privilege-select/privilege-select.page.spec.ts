import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrivilegeSelectPage } from './privilege-select.page';

describe('PrivilegeSelectPage', () => {
  let component: PrivilegeSelectPage;
  let fixture: ComponentFixture<PrivilegeSelectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivilegeSelectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrivilegeSelectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
