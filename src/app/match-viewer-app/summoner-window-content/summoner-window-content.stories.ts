import { storiesOf } from '@storybook/angular';
import { SharedModule } from 'src/app/shared/shared.module';

import { SummonerWindowContentComponent } from './summoner-window-content.component';

storiesOf('Summoner Window Content', module)
  .add('default', () => ({
    component: SummonerWindowContentComponent,
    moduleMetadata: {
      imports: [ SharedModule ]
    }
  }))