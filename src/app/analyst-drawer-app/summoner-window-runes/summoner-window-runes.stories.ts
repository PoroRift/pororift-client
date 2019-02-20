import { storiesOf } from '@storybook/angular';
import { SharedModule } from 'src/app/shared/shared.module';

import { SummonerWindowRunesComponent } from './summoner-window-runes.component';

storiesOf('Summoner Window : Runes', module)
  .add('with full set of runes', () => ({
    component: SummonerWindowRunesComponent,
    moduleMetadata: {
      imports: [ SharedModule ]
    },
    props: {
      runes: {
        mainPath: {
          icon: 'https://bit.ly/2BUREmc',
          name: 'Sorcery'
        },
        mainRunes: [{
            icon: 'https://bit.ly/2VdXYy4',
            name: 'Sorcery',
            description: 'PASSIVE: Gain 0.8% per Legend stack Life steal icon life steal, up to 8% with 10 stacks.'
          }, {
            icon: 'https://bit.ly/2VdXYy4',
            name: 'Sorcery',
            description: 'PASSIVE: Gain 0.8% per Legend stack Life steal icon life steal, up to 8% with 10 stacks.'
          }, {
            icon: 'https://bit.ly/2VdXYy4',
            name: 'Sorcery',
            description: 'PASSIVE: Gain 0.8% per Legend stack Life steal icon life steal, up to 8% with 10 stacks.'
          }, {
            icon: 'https://bit.ly/2VdXYy4',
            name: 'Overheal',
            description: 'PASSIVE: Heal power Healing in excess of your maximum health is converted into a Hybrid ' +
              'resistances icon shield for an amount of up to 10 (+ 10% of maximum health). The shield lasts 6 seconds, ' +
              'and then decays over a 2-second duration. Receiving healing, dealing or taking damage will refresh the shield ' +
              'duration to 6 seconds. \n The rate of conversion is 40% for self-healing and 300% for healing from allies.'
          }
        ],
        secondaryPath: {
          icon: 'https://bit.ly/2BUREmc',
          name: 'Sorcery'
        },
        secondaryRunes: [{
          icon: 'https://bit.ly/2VdXYy4',
          name: 'Sorcery',
          description: 'PASSIVE: Gain 0.8% per Legend stack Life steal icon life steal, up to 8% with 10 stacks.'
        }, {
          icon: 'https://bit.ly/2VdXYy4',
          name: 'Sorcery',
          description: 'PASSIVE: Gain 0.8% per Legend stack Life steal icon life steal, up to 8% with 10 stacks.'
        }]
      }
    }
  }))
