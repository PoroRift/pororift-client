import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

const MaterialModule = [
  BrowserAnimationsModule,
  MatIconModule,
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
