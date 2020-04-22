import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SecurityOwnershipCheckPage } from './security-ownership-check.page';

describe('SecurityOwnershipCheckPage', () => {
  let component: SecurityOwnershipCheckPage;
  let fixture: ComponentFixture<SecurityOwnershipCheckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityOwnershipCheckPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SecurityOwnershipCheckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
