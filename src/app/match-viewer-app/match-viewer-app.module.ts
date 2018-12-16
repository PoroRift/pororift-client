import { CoreModule } from './../core/core.module';
import { MatchDisplayComponent } from './match-display/match-display.component';
import { MatchViewerLayoutComponent } from './match-viewer-layout/match-viewer-layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamDisplayComponent } from './team-display/team-display.component';
import { SummonerTileComponent } from './summoner-tile/summoner-tile.component';
import { SharedModule } from '../shared/shared.module';
import { BannedDisplayComponent } from './banned-display/banned-display.component';

@NgModule({
  declarations: [
    TeamDisplayComponent,
    MatchViewerLayoutComponent,
    MatchDisplayComponent,
    SummonerTileComponent,
    BannedDisplayComponent
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
