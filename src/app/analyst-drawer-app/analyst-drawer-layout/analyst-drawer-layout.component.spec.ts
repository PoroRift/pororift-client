import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalystDrawerLayoutComponent } from './analyst-drawer-layout.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';

describe('AnalystDrawerLayoutComponent', () => {
  let component: AnalystDrawerLayoutComponent;
  let fixture: ComponentFixture<AnalystDrawerLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ CommonModule, SharedModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
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
