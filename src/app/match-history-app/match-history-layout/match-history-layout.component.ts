import { Component, OnInit, Input } from '@angular/core';
import { Match } from '../match-history-model';

@Component({
  selector: 'match-history-layout',
  templateUrl: './match-history-layout.component.html',
  styleUrls: ['./match-history-layout.component.scss']
})
export class MatchHistoryLayoutComponent implements OnInit {
  
  @Input() summonerName: string;
  @Input() summonerMatches: Match[];

  constructor() { }

  ngOnInit() {
    this.summonerName = "doublelift";
    this.summonerMatches = [{
      victory: true,
      champion: {
        championName: 'Akali',
        championIcon: 'https://bit.ly/2UsaZUl'
      }
    }]
  }

}
