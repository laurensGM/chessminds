import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChesslegendsPage } from './chesslegends.page';

describe('ChesslegendsPage', () => {
  let component: ChesslegendsPage;
  let fixture: ComponentFixture<ChesslegendsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChesslegendsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChesslegendsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
