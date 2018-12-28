import { storiesOf } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { withNotes } from '@storybook/addon-notes';

import { SummonerTileComponent } from './summoner-tile.component';
import { SummonerTileDetailComponent } from '../summoner-tile-detail/summoner-tile-detail.component';

storiesOf('Summoner Tile Display', module)
  .add('with blue team summoner', 
    withNotes({ text: 'On hover effects not yet working... Tried with MatTooltipModule, but no effect.' })(() => ({
    component: SummonerTileComponent,
    moduleMetadata: {
      imports: [ CommonModule, FlexLayoutModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      declarations: [ SummonerTileDetailComponent ]
    },
    props: {
      summonerInfo: {
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
      },
      blueTeam: true
    },
  })))
  .add('with red team summoner', () => ({
    component: SummonerTileComponent,
    moduleMetadata: {
      imports: [ CommonModule, FlexLayoutModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      declarations: [ SummonerTileDetailComponent ]
    },
    props: {
      summonerInfo: {
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
      },
      blueTeam: false
    },
  }));