import { SummonerDetail } from './../match-viewer-model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'summoner-tile-detail',
  templateUrl: './summoner-tile-detail.component.html',
  styleUrls: ['./summoner-tile-detail.component.scss']
})
export class SummonerTileDetailComponent implements OnInit {

  @Input() summonerDetail: SummonerDetail;
  @Input() blueTeam: boolean;

  constructor() { }

  ngOnInit() {
  }

  public openRunes(): void {
    console.log('open runes!');
  }

  public openLastBuild(): void {
    console.log('open last build!');
  }

}
