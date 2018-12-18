import { Component, OnInit } from '@angular/core';
import { SummonerInfo, Champion } from '../match-viewer-model';

@Component({
  selector: 'app-team-display',
  templateUrl: './team-display.component.html',
  styleUrls: ['./team-display.component.scss']
})

/**
 * TODO: component that will display each summoner in a column
 */
export class TeamDisplayComponent implements OnInit {

  public summonerInfos: SummonerInfo[];
  public bannedChampions: Champion[];

  constructor() { }

  public ngOnInit(): void {
    this.mockSummonerInfo();
  }

  /**
   * just a method that will populate summonerInfo with dummy data
   */
  private mockSummonerInfo(): void {
    this.summonerInfos = [{
      summonerName: `Summoner's Name`,
      champion: {
        championName: 'Akali',
        championIcon: 'https://bit.ly/2UsaZUl'
      },
      firstSpellIcon: {
        url: 'https://bit.ly/2QMvOe2',
        alt: 'heal'
      },
      secondSpellIcon: {
        url: 'https://bit.ly/2L326MC',
        alt: 'flash'
      },
      summonerKDA: { kill: 0, death: 0, assist: 0 },
      summonerRank: 'Gold 1'
    }, {
      summonerName: `Summoner's Name`,
      champion: {
        championName: 'Akali',
        championIcon: 'https://bit.ly/2UsaZUl'
      },
      firstSpellIcon: {
        url: 'https://bit.ly/2QMvOe2',
        alt: 'heal'
      },
      secondSpellIcon: {
        url: 'https://bit.ly/2L326MC',
        alt: 'flash'
      },
      summonerKDA: { kill: 0, death: 0, assist: 0 },
      summonerRank: 'Gold 1'
    }];

    this.bannedChampions = [
      {
        championName: 'Akali',
        championIcon: 'https://bit.ly/2UsaZUl'
      }, {
        championName: 'Akali',
        championIcon: 'https://bit.ly/2UsaZUl'
      }, {
        championName: 'Akali',
        championIcon: 'https://bit.ly/2UsaZUl'
      }, {
        championName: 'Akali',
        championIcon: 'https://bit.ly/2UsaZUl'
      }, {
        championName: 'Akali',
        championIcon: 'https://bit.ly/2UsaZUl'
      }
    ];
  }

}
