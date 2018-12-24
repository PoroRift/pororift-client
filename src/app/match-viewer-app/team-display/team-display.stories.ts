import { storiesOf } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TeamDisplayComponent } from './team-display.component';
import { SummonerTileComponent } from '../summoner-tile/summoner-tile.component';

storiesOf('Team Display', module)
  .add('with team', () => ({
    component: TeamDisplayComponent,
    moduleMetadata: {
      imports: [ CommonModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      declarations: [ SummonerTileComponent ]
    },
    props: {
      summonerInfos: [{
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
      }],
      bannedChampions: [
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
      ]
    },
  }));