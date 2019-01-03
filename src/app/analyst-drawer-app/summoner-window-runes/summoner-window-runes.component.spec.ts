import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummonerWindowRunesComponent } from './summoner-window-runes.component';

describe('SummonerWindowRunesComponent', () => {
  let component: SummonerWindowRunesComponent;
  let fixture: ComponentFixture<SummonerWindowRunesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummonerWindowRunesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummonerWindowRunesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
