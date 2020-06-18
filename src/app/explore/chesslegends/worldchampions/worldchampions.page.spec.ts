import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WorldchampionsPage } from './worldchampions.page';

describe('WorldchampionsPage', () => {
  let component: WorldchampionsPage;
  let fixture: ComponentFixture<WorldchampionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldchampionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WorldchampionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
