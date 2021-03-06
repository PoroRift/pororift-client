import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummonerWindowRunesComponent } from './summoner-window-runes.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
import { runesMock } from 'src/app/shared/mock-data/runes-mock';

describe('SummonerWindowRunesComponent', () => {
  let component: SummonerWindowRunesComponent;
  let fixture: ComponentFixture<SummonerWindowRunesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ CommonModule, SharedModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      declarations: [ SummonerWindowRunesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummonerWindowRunesComponent);
    component = fixture.componentInstance;
    component.runes = runesMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
