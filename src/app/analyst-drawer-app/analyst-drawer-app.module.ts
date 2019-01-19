import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalystDrawerLayoutComponent } from './analyst-drawer-layout/analyst-drawer-layout.component';
import { SummonerWindowFrameComponent } from './summoner-window-frame/summoner-window-frame.component';
import { SummonerWindowContentComponent } from './summoner-window-content/summoner-window-content.component';
import { SummonerWindowRunesComponent } from './summoner-window-runes/summoner-window-runes.component';
import { SummonerWindowLastBuildComponent } from './summoner-window-last-build/summoner-window-last-build.component';

@NgModule({
  declarations: [
    AnalystDrawerLayoutComponent,
    SummonerWindowFrameComponent,
    SummonerWindowContentComponent,
    SummonerWindowRunesComponent,
    SummonerWindowLastBuildComponent
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
