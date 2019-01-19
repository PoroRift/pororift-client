import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummonerWindowContentComponent } from './summoner-window-content.component';

describe('SummonerWindowContentComponent', () => {
  let component: SummonerWindowContentComponent;
  let fixture: ComponentFixture<SummonerWindowContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
