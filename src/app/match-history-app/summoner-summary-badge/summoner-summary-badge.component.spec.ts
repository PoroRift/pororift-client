import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummonerSummaryBadgeComponent } from './summoner-summary-badge.component';

describe('SummonerSummaryBadgeComponent', () => {
  let component: SummonerSummaryBadgeComponent;
  let fixture: ComponentFixture<SummonerSummaryBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummonerSummaryBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummonerSummaryBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
