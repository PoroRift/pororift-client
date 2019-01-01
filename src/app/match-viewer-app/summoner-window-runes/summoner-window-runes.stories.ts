import { storiesOf } from '@storybook/angular';
import { SharedModule } from 'src/app/shared/shared.module';

import { SummonerWindowRunesComponent } from './summoner-window-runes.component';

storiesOf('Summoner Window : Runes', module)
  .add('default', () => ({
    component: SummonerWindowRunesComponent,
    moduleMetadata: {
      imports: [ SharedModule ]
    }
  }))