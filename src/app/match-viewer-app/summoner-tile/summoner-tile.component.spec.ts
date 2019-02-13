import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummonerTileComponent } from './summoner-tile.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { summonerInfoMock } from 'src/app/shared/mock-data/summoner-info-mock';
import 'hammerjs';

describe('SummonerTileComponent', () => {
  let component: SummonerTileComponent;
  let fixture: ComponentFixture<SummonerTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ CommonModule, SharedModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      declarations: [ SummonerTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummonerTileComponent);
    component = fixture.componentInstance;
    component.summonerInfo = summonerInfoMock;
    component.blueTeam = true;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
