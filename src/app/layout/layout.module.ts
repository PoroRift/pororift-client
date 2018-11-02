import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';

@NgModule({
  declarations: [
    NavigationBarComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    SideBarComponent
  ]
})
export class LayoutModule { }
