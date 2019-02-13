import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummonerWindowFrameComponent } from './summoner-window-frame.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';

describe('SummonerWindowFrameComponent', () => {
  let component: SummonerWindowFrameComponent;
  let fixture: ComponentFixture<SummonerWindowFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ CommonModule, SharedModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      declarations: [ SummonerWindowFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummonerWindowFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
