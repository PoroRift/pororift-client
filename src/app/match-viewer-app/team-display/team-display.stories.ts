import { storiesOf } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TeamDisplayComponent } from './team-display.component';
import { SummonerTileComponent } from '../summoner-tile/summoner-tile.component';
import { SummonerTileDetailComponent } from '../summoner-tile-detail/summoner-tile-detail.component';

storiesOf('Team Display', module)
  .add('with 3 summoners on blue team', () => ({
    component: TeamDisplayComponent,
    moduleMetadata: {
      imports: [ CommonModule, SharedModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      declarations: [ SummonerTileComponent, SummonerTileDetailComponent ]
    },
    props: {
      teamPosition: "right",
      summonerInfos: [{
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
        }
      ]
    },
  }))
  .add('with 5 summoners on red team', () => ({
    component: TeamDisplayComponent,
    moduleMetadata: {
      imports: [ CommonModule, SharedModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      declarations: [ SummonerTileComponent, SummonerTileDetailComponent ]
    },
    props: {
      teamPosition: "left",
      summonerInfos: [{
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