import { storiesOf } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { withNotes } from '@storybook/addon-notes';

import { SummonerTileDetailComponent } from './summoner-tile-detail.component';

storiesOf('Summoner Tile Detail Component', module)
  .add('with summoner detail',
    withNotes({ text: 'On hover effects not yet working... Tried with MatTooltipModule, but no effect.' })(() => ({
    component: SummonerTileDetailComponent,
    moduleMetadata: {
      imports: [ CommonModule, SharedModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      declarations: [ SummonerTileDetailComponent ]
    },
    props: {
      summonerDetail: {
        summonerName: `Summoner's Name`,
        summonerKDA: { kill: 0, death: 0, assist: 0 },
        summonerRank: 'Gold 1'
      }
    },
  })));
