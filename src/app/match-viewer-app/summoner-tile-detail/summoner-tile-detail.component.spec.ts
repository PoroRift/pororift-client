import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummonerTileDetailComponent } from './summoner-tile-detail.component';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
import { SharedModule } from 'src/app/shared/shared.module';

describe('SummonerTileDetailComponent', () => {
  let component: SummonerTileDetailComponent;
  let fixture: ComponentFixture<SummonerTileDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ CommonModule, SharedModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
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
