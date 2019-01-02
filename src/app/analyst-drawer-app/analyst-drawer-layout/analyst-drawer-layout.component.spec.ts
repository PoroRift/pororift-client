import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalystDrawerLayoutComponent } from './analyst-drawer-layout.component';

describe('AnalystDrawerLayoutComponent', () => {
  let component: AnalystDrawerLayoutComponent;
  let fixture: ComponentFixture<AnalystDrawerLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalystDrawerLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalystDrawerLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
