import { storiesOf } from '@storybook/angular';

import { SummonerTileComponent } from './summoner-tile.component';

storiesOf('Summoner Tile Display', module)
  .add('with summoner', () => ({
    component: SummonerTileComponent,
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