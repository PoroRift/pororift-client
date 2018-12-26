import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ReactiveFormsModule } from '@angular/forms';
import { SideBarComponent } from './component/side-bar/side-bar.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';

const MaterialModule = [
  BrowserAnimationsModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  FlexLayoutModule,
  MatTooltipModule,
  MatDialogModule
];

@NgModule({
  declarations: [
    SideBarComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  exports: [
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SideBarComponent
  ]
})
export class SharedModule { }
