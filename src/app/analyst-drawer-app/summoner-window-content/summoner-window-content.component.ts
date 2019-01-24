import { Component, OnInit, Input } from '@angular/core';
import { BuildItem, RuneSet } from '../analyst-drawer-model';

@Component({
  selector: 'summoner-window-content',
  templateUrl: './summoner-window-content.component.html',
  styleUrls: ['./summoner-window-content.component.scss']
})
export class SummonerWindowContentComponent implements OnInit {

  @Input() runes: RuneSet;
  @Input() lastBuild: BuildItem[];
  @Input() championName: string;
  // { mainPath: RunePath, mainRunes: Rune[], secondaryRunes: Rune[], secondaryPath: RunePath }
  // { championName: string, buildItems: Item[] }
  // Item: { name: string, icon: string, description: string, cost: number }

  constructor() { }

  ngOnInit(): void {
    this.mockData();
  }

  private mockData(): void {
    this.runes = {
      primaryPath: {
        icon: 'https://bit.ly/2BUREmc',
        name: 'Sorcery'
      },
      keystone: {
        name: '',
        icon: '',
        description: ''
      },
      primaryPathRunes: [{
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
          description: 'PASSIVE: Heal power Healing in excess of your maximum health is converted into a Hybrid resistances ' +
            'icon shield for an amount of up to 10 (+ 10% of maximum health). The shield lasts 6 seconds, and then decays over ' +
            'a 2-second duration. Receiving healing, dealing or taking damage will refresh the shield duration to 6 seconds. \n The ' +
            'rate of conversion is 40% for self-healing and 300% for healing from allies.'
        }
      ],
      secondaryPath: {
        icon: 'https://bit.ly/2BUREmc',
        name: 'Sorcery'
      },
      secondaryPathRunes: [{
        icon: 'https://bit.ly/2VdXYy4',
        name: 'Sorcery',
        description: 'PASSIVE: Gain 0.8% per Legend stack Life steal icon life steal, up to 8% with 10 stacks.'
      }, {
        icon: 'https://bit.ly/2VdXYy4',
        name: 'Sorcery',
        description: 'PASSIVE: Gain 0.8% per Legend stack Life steal icon life steal, up to 8% with 10 stacks.'
      }]
    };
    this.lastBuild = [{
        name: 'Phantom Dancer',
        icon: 'https://bit.ly/2LDHYkr',
        description: 'Stats: +45% attack speed | +30% critical strike chance | +5% movement speed \n Passive: \n UNIQUE – SPECTRAL ' +
          'WALTZ: Grants Ghost ghosting and +7% movement speed while within 550 units of a visible enemy champion. \n UNIQUE – ' +
          'LAMENT: Grants 12% damage reduction against the last enemy champion you basic attacked (lasts for 10 seconds and ' +
          'refreshes with each basic attack).',
        cost: 2700
      }, {
        name: 'Infinity Edge',
        icon: 'https://bit.ly/2Su2pmz',
        description: 'Stats \n +70 attack damage \n Passive \n UNIQUE: Doubles your Critical strike chance icon critical strike ' +
          'chance. \n UNIQUE: When Critical strike icon critically striking champions, converts 10% of critical strike damage to ' +
          'Hybrid penetration true damage.\n',
        cost: 3400
      }, {
        name: 'Phantom Dancer',
        icon: 'https://bit.ly/2LDHYkr',
        description: 'Stats: +45% attack speed | +30% critical strike chance | +5% movement speed \n Passive: \n UNIQUE – SPECTRAL ' +
          'WALTZ: Grants Ghost ghosting and +7% movement speed while within 550 units of a visible enemy champion. \n UNIQUE – ' +
          'LAMENT: Grants 12% damage reduction against the last enemy champion you basic attacked (lasts for 10 seconds and ' +
          'refreshes with each basic attack).',
        cost: 2700
      }, {
        name: 'Phantom Dancer',
        icon: 'https://bit.ly/2LDHYkr',
        description: 'Stats: +45% attack speed | +30% critical strike chance | +5% movement speed \n Passive: \n UNIQUE – ' +
          'SPECTRAL WALTZ: Grants Ghost ghosting and +7% movement speed while within 550 units of a visible enemy champion. ' +
          '\n UNIQUE – LAMENT: Grants 12% damage reduction against the last enemy champion you basic attacked (lasts for 10 ' +
          'seconds and refreshes with each basic attack).',
        cost: 2700
      }, {
        name: 'Phantom Dancer',
        icon: 'https://bit.ly/2LDHYkr',
        description: 'Stats: +45% attack speed | +30% critical strike chance | +5% movement speed \n Passive: \n UNIQUE – ' +
          'SPECTRAL WALTZ: Grants Ghost ghosting and +7% movement speed while within 550 units of a visible enemy champion. \n' +
          ' UNIQUE – LAMENT: Grants 12% damage reduction against the last enemy champion you basic attacked (lasts for 10 seconds ' +
          'and refreshes with each basic attack).',
        cost: 2700
      }, {
        name: 'Phantom Dancer',
        icon: 'https://bit.ly/2LDHYkr',
        description: 'Stats: +45% attack speed | +30% critical strike chance | +5% movement speed \n Passive: \n UNIQUE – SPECTRAL' +
          ' WALTZ: Grants Ghost ghosting and +7% movement speed while within 550 units of a visible enemy champion. \n UNIQUE – ' +
          'LAMENT: Grants 12% damage reduction against the last enemy champion you basic attacked (lasts for 10 seconds and ' +
          'refreshes with each basic attack).',
        cost: 2700
      }
    ];
    this.championName = 'akali';
  }
}
