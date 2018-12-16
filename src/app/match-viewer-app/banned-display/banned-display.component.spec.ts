import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannedDisplayComponent } from './banned-display.component';

describe('BannedDisplayComponent', () => {
  let component: BannedDisplayComponent;
  let fixture: ComponentFixture<BannedDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannedDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannedDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
