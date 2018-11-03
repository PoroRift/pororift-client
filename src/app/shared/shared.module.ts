import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

const MaterialModule = [
  BrowserAnimationsModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule
];

@NgModule({
  declarations: [],
  imports: [
    MaterialModule,
    CommonModule
  ],
  exports: [
    MaterialModule
  ]
})
export class SharedModule { }
