import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchHistoryLayoutComponent } from './match-history-layout/match-history-layout.component';
import { MatchTileComponent } from './match-tile/match-tile.component';
import { SummonerSummaryBadgeComponent } from './summoner-summary-badge/summoner-summary-badge.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MatchHistoryLayoutComponent,
    MatchTileComponent,
    SummonerSummaryBadgeComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule
  ],
  exports: [
    MatchHistoryLayoutComponent
  ]
})
export class MatchHistoryAppModule { }
