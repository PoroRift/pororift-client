import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchHistoryLayoutComponent } from './match-history-layout.component';

describe('MatchHistoryLayoutComponent', () => {
  let component: MatchHistoryLayoutComponent;
  let fixture: ComponentFixture<MatchHistoryLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchHistoryLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchHistoryLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
