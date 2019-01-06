import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummonerWindowLastBuildComponent } from './summoner-window-last-build.component';

describe('SummonerWindowLastBuildComponent', () => {
  let component: SummonerWindowLastBuildComponent;
  let fixture: ComponentFixture<SummonerWindowLastBuildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
