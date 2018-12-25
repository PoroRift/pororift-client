import { Component, OnInit, Input } from '@angular/core';
import { SummonerInfo, Champion } from '../match-viewer-model';

@Component({
  selector: 'team-display',
  templateUrl: './team-display.component.html',
  styleUrls: ['./team-display.component.scss']
})

/**
 * TODO: component that will display each summoner in a column
 */
export class TeamDisplayComponent implements OnInit {

  @Input() teamPosition: string;
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
      summonerDetail: {
        summonerName: `Summoner's Name`,
        summonerKDA: { kill: 0, death: 0, assist: 0 },
        summonerRank: 'Gold 1'
      }
    }, {
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
      summonerDetail: {
        summonerName: `Summoner's Name`,
        summonerKDA: { kill: 0, death: 0, assist: 0 },
        summonerRank: 'Gold 1'
      }
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
