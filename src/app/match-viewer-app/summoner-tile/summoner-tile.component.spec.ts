import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummonerTileComponent } from './summoner-tile.component';

describe('SummonerTileComponent', () => {
  let component: SummonerTileComponent;
  let fixture: ComponentFixture<SummonerTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummonerTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummonerTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
