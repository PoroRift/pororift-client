import { storiesOf } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SummonerTileComponent } from './summoner-tile.component';

storiesOf('Summoner Tile Display', module)
  //.addDecorator((story) => {return `<div style={{ textAlign: 'center' }}>{story()}</div>`;})
  .add('with summoner', () => ({
    component: SummonerTileComponent,
    moduleMetadata: {
      imports: [ CommonModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      declarations: [ SummonerTileComponent ]
    },
    props: {
      summonerInfo: {
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
      }
    },
  }));