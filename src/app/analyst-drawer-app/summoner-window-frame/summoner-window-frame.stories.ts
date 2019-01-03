import { storiesOf } from '@storybook/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';


import { SummonerWindowContentComponent } from '../summoner-window-content/summoner-window-content.component'
import { SummonerWindowFrameComponent } from './summoner-window-frame.component';
import { SummonerWindowLastBuildComponent } from '../summoner-window-last-build/summoner-window-last-build.component';
import { SummonerWindowRunesComponent } from '../summoner-window-runes/summoner-window-runes.component';


storiesOf('Summoner Window Frame', module)
  .add('populated with content', () => ({
    component: SummonerWindowFrameComponent,
    moduleMetadata: {
      imports: [ SharedModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      declarations: [ SummonerWindowContentComponent, SummonerWindowLastBuildComponent, SummonerWindowRunesComponent ]
    },
  }))