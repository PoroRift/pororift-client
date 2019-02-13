import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummonerWindowLastBuildComponent } from './summoner-window-last-build.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';

describe('SummonerWindowLastBuildComponent', () => {
  let component: SummonerWindowLastBuildComponent;
  let fixture: ComponentFixture<SummonerWindowLastBuildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ CommonModule, SharedModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      declarations: [ SummonerWindowLastBuildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummonerWindowLastBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
