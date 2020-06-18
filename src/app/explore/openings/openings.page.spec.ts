import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OpeningsPage } from './openings.page';

describe('OpeningsPage', () => {
  let component: OpeningsPage;
  let fixture: ComponentFixture<OpeningsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpeningsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OpeningsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
