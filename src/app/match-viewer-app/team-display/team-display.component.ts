import { Component, OnInit, Input } from '@angular/core';
import { SummonerInfo, Champion } from '../match-viewer-model';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

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
  // Should this info come from match-display component instead?
  @Input() summonerInfos: SummonerInfo[];
  @Input() bannedChampions: Champion[];

  constructor() { }

  public ngOnInit(): void {
    if (!this.summonerInfos || !this.bannedChampions) {
      this.mockSummonerInfo();
    }
  }

  public drop(event: CdkDragDrop<SummonerInfo>): void {
    moveItemInArray(this.summonerInfos, event.previousIndex, event.currentIndex);
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
        championName: 'Tryndamere',
        championIcon: 'https://riot.com/2ELPvMO'
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
