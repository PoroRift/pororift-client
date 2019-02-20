import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummonerWindowContentComponent } from './summoner-window-content.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';

describe('SummonerWindowContentComponent', () => {
  let component: SummonerWindowContentComponent;
  let fixture: ComponentFixture<SummonerWindowContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ CommonModule, SharedModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      declarations: [ SummonerWindowContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummonerWindowContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
