import { MatchViewerService } from './../../core/services/match-viewer.service';
import { Component, OnInit } from '@angular/core';
import { SummonerInfo } from '../match-viewer-model';

@Component({
  selector: 'match-display',
  templateUrl: './match-display.component.html',
  styleUrls: ['./match-display.component.scss']
})
export class MatchDisplayComponent implements OnInit {

  public redTeam: SummonerInfo[];
  public blueTeam: SummonerInfo[];

  constructor(private _matchViewerService: MatchViewerService) { }

  ngOnInit() {
    this._matchViewerService.getLiveMatch('1234')
      .subscribe(res => {
        this.redTeam = res.matchViewer.slice(0, 5);
        this.blueTeam = res.matchViewer.slice(5, res.matchViewer.length);
      });
  }

}
