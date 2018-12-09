import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchViewerLayoutComponent } from './match-viewer-layout.component';

describe('MatchViewerLayoutComponent', () => {
  let component: MatchViewerLayoutComponent;
  let fixture: ComponentFixture<MatchViewerLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchViewerLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchViewerLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
