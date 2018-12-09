import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolBarComponent } from './component/tool-bar/tool-bar.component';

@NgModule({
  declarations: [
    ToolBarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FlexLayoutModule
  ],
  exports: [
    ToolBarComponent
  ]
})
export class CoreModule { }
