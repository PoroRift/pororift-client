import { AnalystDrawerAppModule } from './../analyst-drawer-app/analyst-drawer-app.module';
import { CoreModule } from './../core/core.module';
import { MatchDisplayComponent } from './match-display/match-display.component';
import { MatchViewerLayoutComponent } from './match-viewer-layout/match-viewer-layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamDisplayComponent } from './team-display/team-display.component';
import { SummonerTileComponent } from './summoner-tile/summoner-tile.component';
import { SharedModule } from '../shared/shared.module';
import { SummonerTileDetailComponent } from './summoner-tile-detail/summoner-tile-detail.component';

@NgModule({
  declarations: [
    TeamDisplayComponent,
    MatchViewerLayoutComponent,
    MatchDisplayComponent,
    SummonerTileComponent,
    SummonerTileDetailComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    AnalystDrawerAppModule
  ],
  exports: [
    MatchViewerLayoutComponent
  ]
})
export class MatchViewerAppModule { }
