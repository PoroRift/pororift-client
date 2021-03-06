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
      lastBuild: [{
          name: 'Phantom Dancer', 
          icon: 'https://bit.ly/2LDHYkr', 
          description: '1Stats: +45% attack speed | +30% critical strike chance | +5% movement speed \n Passive: \n UNIQUE – SPECTRAL WALTZ: Grants Ghost ghosting and +7% movement speed while within 550 units of a visible enemy champion. \n UNIQUE – LAMENT: Grants 12% damage reduction against the last enemy champion you basic attacked (lasts for 10 seconds and refreshes with each basic attack).', 
          cost: 2700 
        }, {
          name: 'Infinity Edge', 
          icon: 'https://bit.ly/2Su2pmz', 
          description: 'Stats \n +70 attack damage \n Passive \n UNIQUE: Doubles your Critical strike chance icon critical strike chance. \n UNIQUE: When Critical strike icon critically striking champions, converts 10% of critical strike damage to Hybrid penetration true damage.\n', 
          cost: 3400 
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
        }
      ]
    }
  }))