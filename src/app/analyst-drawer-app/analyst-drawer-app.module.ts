import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalystDrawerLayoutComponent } from './analyst-drawer-layout/analyst-drawer-layout.component';


@NgModule({
  declarations: [
    AnalystDrawerLayoutComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    AnalystDrawerLayoutComponent
  ]
})
export class AnalystDrawerAppModule { }
