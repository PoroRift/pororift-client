import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummonerWindowFrameComponent } from './summoner-window-frame.component';

describe('SummonerWindowFrameComponent', () => {
  let component: SummonerWindowFrameComponent;
  let fixture: ComponentFixture<SummonerWindowFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
