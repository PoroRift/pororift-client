import { Component, OnInit, Input } from '@angular/core';
import { SummonerInfo } from '../match-viewer-model';

@Component({
  selector: 'app-summoner-tile',
  templateUrl: './summoner-tile.component.html',
  styleUrls: ['./summoner-tile.component.scss']
})
export class SummonerTileComponent implements OnInit {

  @Input() summonerInfo: SummonerInfo;
  @Input() blueTeam: boolean;

  constructor() { }

  public ngOnInit(): void {
  }
}
