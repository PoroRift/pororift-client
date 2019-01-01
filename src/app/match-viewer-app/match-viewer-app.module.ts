import { CoreModule } from './../core/core.module';
import { MatchDisplayComponent } from './match-display/match-display.component';
import { MatchViewerLayoutComponent } from './match-viewer-layout/match-viewer-layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamDisplayComponent } from './team-display/team-display.component';
import { SummonerTileComponent } from './summoner-tile/summoner-tile.component';
import { SharedModule } from '../shared/shared.module';
import { SummonerTileDetailComponent } from './summoner-tile-detail/summoner-tile-detail.component';
import { SummonerWindowFrameComponent } from './summoner-window-frame/summoner-window-frame.component';
import { SummonerWindowContentComponent } from './summoner-window-content/summoner-window-content.component';
import { SummonerWindowRunesComponent } from './summoner-window-runes/summoner-window-runes.component';
import { SummonerWindowLastBuildComponent } from './summoner-window-last-build/summoner-window-last-build.component';

@NgModule({
  declarations: [
    TeamDisplayComponent,
    MatchViewerLayoutComponent,
    MatchDisplayComponent,
    SummonerTileComponent,
    SummonerTileDetailComponent,
    SummonerWindowFrameComponent,
    SummonerWindowContentComponent,
    SummonerWindowRunesComponent,
    SummonerWindowLastBuildComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule
  ],
  exports: [
    MatchViewerLayoutComponent
  ]
})
export class MatchViewerAppModule { }
