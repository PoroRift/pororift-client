import { storiesOf } from '@storybook/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';


import { SummonerWindowContentComponent } from '../summoner-window-content/summoner-window-content.component'
import { SummonerWindowFrameComponent } from './summoner-window-frame.component';


storiesOf('Summoner Window Frame', module)
  .add('default', () => ({
    component: SummonerWindowFrameComponent,
    moduleMetadata: {
      imports: [ SharedModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      declarations: [ SummonerWindowContentComponent ]
    },
  }))