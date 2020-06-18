import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MatingpatternsPage } from './matingpatterns.page';

describe('MatingpatternsPage', () => {
  let component: MatingpatternsPage;
  let fixture: ComponentFixture<MatingpatternsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatingpatternsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MatingpatternsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
