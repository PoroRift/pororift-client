import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchHistoryLayoutComponent } from './match-history-layout/match-history-layout.component';
import { MatchTileComponent } from './match-tile/match-tile.component';
import { SummonerSummaryBadgeComponent } from './summoner-summary-badge/summoner-summary-badge.component';

@NgModule({
  declarations: [MatchHistoryLayoutComponent, MatchTileComponent, SummonerSummaryBadgeComponent],
  imports: [
    CommonModule
  ]
})
export class MatchHistoryAppModule { }
