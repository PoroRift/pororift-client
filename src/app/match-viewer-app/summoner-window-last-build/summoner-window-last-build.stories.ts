import { storiesOf } from '@storybook/angular';
import { SharedModule } from 'src/app/shared/shared.module';

import { SummonerWindowLastBuildComponent } from './summoner-window-last-build.component';

storiesOf('Summoner Window : Last Build', module)
  .add('with 7 items', () => ({
    component: SummonerWindowLastBuildComponent,
    moduleMetadata: {
      imports: [ SharedModule ]
    },
    props: {
      lastBuild: {
        championName: 'akali',
        buildItems: [{
          name: 'Phantom Dancer', 
          icon: 'https://bit.ly/2LDHYkr', 
          description: '1Stats: +45% attack speed | +30% critical strike chance | +5% movement speed \n Passive: \n UNIQUE – SPECTRAL WALTZ: Grants Ghost ghosting and +7% movement speed while within 550 units of a visible enemy champion. \n UNIQUE – LAMENT: Grants 12% damage reduction against the last enemy champion you basic attacked (lasts for 10 seconds and refreshes with each basic attack).', 
          cost: 2700 
        }, {
          name: 'Phantom Dancer', 
          icon: 'https://bit.ly/2LDHYkr', 
          description: '2Stats: +45% attack speed | +30% critical strike chance | +5% movement speed \n Passive: \n UNIQUE – SPECTRAL WALTZ: Grants Ghost ghosting and +7% movement speed while within 550 units of a visible enemy champion. \n UNIQUE – LAMENT: Grants 12% damage reduction against the last enemy champion you basic attacked (lasts for 10 seconds and refreshes with each basic attack).', 
          cost: 2700 
        }, {
          name: 'Phantom Dancer', 
          icon: 'https://bit.ly/2LDHYkr', 
          description: '3Stats: +45% attack speed | +30% critical strike chance | +5% movement speed \n Passive: \n UNIQUE – SPECTRAL WALTZ: Grants Ghost ghosting and +7% movement speed while within 550 units of a visible enemy champion. \n UNIQUE – LAMENT: Grants 12% damage reduction against the last enemy champion you basic attacked (lasts for 10 seconds and refreshes with each basic attack).', 
          cost: 2700 
        }, {
          name: 'Phantom Dancer', 
          icon: 'https://bit.ly/2LDHYkr', 
          description: '4Stats: +45% attack speed | +30% critical strike chance | +5% movement speed \n Passive: \n UNIQUE – SPECTRAL WALTZ: Grants Ghost ghosting and +7% movement speed while within 550 units of a visible enemy champion. \n UNIQUE – LAMENT: Grants 12% damage reduction against the last enemy champion you basic attacked (lasts for 10 seconds and refreshes with each basic attack).', 
          cost: 2700 
        }, {
          name: 'Phantom Dancer', 
          icon: 'https://bit.ly/2LDHYkr', 
          description: '5Stats: +45% attack speed | +30% critical strike chance | +5% movement speed \n Passive: \n UNIQUE – SPECTRAL WALTZ: Grants Ghost ghosting and +7% movement speed while within 550 units of a visible enemy champion. \n UNIQUE – LAMENT: Grants 12% damage reduction against the last enemy champion you basic attacked (lasts for 10 seconds and refreshes with each basic attack).', 
          cost: 2700 
        }, {
          name: 'Phantom Dancer', 
          icon: 'https://bit.ly/2LDHYkr', 
          description: '6Stats: +45% attack speed | +30% critical strike chance | +5% movement speed \n Passive: \n UNIQUE – SPECTRAL WALTZ: Grants Ghost ghosting and +7% movement speed while within 550 units of a visible enemy champion. \n UNIQUE – LAMENT: Grants 12% damage reduction against the last enemy champion you basic attacked (lasts for 10 seconds and refreshes with each basic attack).', 
          cost: 2700 
        }, {
          name: 'Phantom Dancer', 
          icon: 'https://bit.ly/2LDHYkr', 
          description: '7Stats: +45% attack speed | +30% critical strike chance | +5% movement speed \n Passive: \n UNIQUE – SPECTRAL WALTZ: Grants Ghost ghosting and +7% movement speed while within 550 units of a visible enemy champion. \n UNIQUE – LAMENT: Grants 12% damage reduction against the last enemy champion you basic attacked (lasts for 10 seconds and refreshes with each basic attack).', 
          cost: 2700 
        }]
      }
    }
  }))