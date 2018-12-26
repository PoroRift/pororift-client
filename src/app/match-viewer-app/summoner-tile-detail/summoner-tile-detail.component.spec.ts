import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummonerTileDetailComponent } from './summoner-tile-detail.component';

describe('SummonerTileDetailComponent', () => {
  let component: SummonerTileDetailComponent;
  let fixture: ComponentFixture<SummonerTileDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummonerTileDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummonerTileDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
