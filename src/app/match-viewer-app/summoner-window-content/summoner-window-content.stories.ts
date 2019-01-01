import { storiesOf } from '@storybook/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { SummonerWindowContentComponent } from './summoner-window-content.component';
import { SummonerWindowRunesComponent } from '../summoner-window-runes/summoner-window-runes.component';
import { SummonerWindowLastBuildComponent } from '../summoner-window-last-build/summoner-window-last-build.component';

storiesOf('Summoner Window Content', module)
  .add('default', () => ({
    component: SummonerWindowContentComponent,
    moduleMetadata: {
      imports: [ SharedModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      declarations: [ SummonerWindowRunesComponent, SummonerWindowLastBuildComponent ]
    }
  }))