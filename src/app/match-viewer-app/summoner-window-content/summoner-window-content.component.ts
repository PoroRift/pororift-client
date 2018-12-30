import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'summoner-window-content',
  templateUrl: './summoner-window-content.component.html',
  styleUrls: ['./summoner-window-content.component.scss']
})
export class SummonerWindowContentComponent implements OnInit {

  @Input() runes: object;
  @Input() lastBuild: object;
  // { mainPath: RunePath, mainRunes: Rune[], secondaryRunes: Rune[], secondaryPath: RunePath }
  // { championName: string, buildItems: Item[] }
  // Item: { name: string, icon: string, description: string, cost: number }

  constructor() { }

  ngOnInit(): void {
    this.mockData()
  }

  private mockData(): void {
    this.runes = {
      mainPath: {
        icon: 'https://bit.ly/2VdXYy4',
        name: 'Sorcery'
      },
      mainRunes: [{
          icon: 'https://bit.ly/2VdXYy4',
          name: 'Sorcery'
        }, {
          icon: 'https://bit.ly/2VdXYy4',
          name: 'Sorcery'
        }, {
          icon: 'https://bit.ly/2VdXYy4',
          name: 'Sorcery'
        }, 
      ],
      secondaryPath: {
        icon: 'https://bit.ly/2VdXYy4',
        name: 'Sorcery'
      },
      secondaryRunes: [{
        icon: 'https://bit.ly/2VdXYy4',
        name: 'Sorcery'
      }, {
        icon: 'https://bit.ly/2VdXYy4',
        name: 'Sorcery'
      }]
    };
    this.lastBuild = {
      championName: 'akali',
      buildItems: [{
        name: 'Phantom Dancer', 
        icon: 'https://bit.ly/2LDHYkr', 
        description: 'Stats: +45% attack speed | +30% critical strike chance | +5% movement speed \n Passive: \n UNIQUE – SPECTRAL WALTZ: Grants Ghost ghosting and +7% movement speed while within 550 units of a visible enemy champion. \n UNIQUE – LAMENT: Grants 12% damage reduction against the last enemy champion you basic attacked (lasts for 10 seconds and refreshes with each basic attack).', 
        cost: 2700 
      }, {
        name: 'Phantom Dancer', 
        icon: 'https://bit.ly/2LDHYkr', 
        description: 'Stats: +45% attack speed | +30% critical strike chance | +5% movement speed \n Passive: \n UNIQUE – SPECTRAL WALTZ: Grants Ghost ghosting and +7% movement speed while within 550 units of a visible enemy champion. \n UNIQUE – LAMENT: Grants 12% damage reduction against the last enemy champion you basic attacked (lasts for 10 seconds and refreshes with each basic attack).', 
        cost: 2700 
      }, {
        name: 'Phantom Dancer', 
        icon: 'https://bit.ly/2LDHYkr', 
        description: 'Stats: +45% attack speed | +30% critical strike chance | +5% movement speed \n Passive: \n UNIQUE – SPECTRAL WALTZ: Grants Ghost ghosting and +7% movement speed while within 550 units of a visible enemy champion. \n UNIQUE – LAMENT: Grants 12% damage reduction against the last enemy champion you basic attacked (lasts for 10 seconds and refreshes with each basic attack).', 
        cost: 2700 
      }, {
        name: 'Phantom Dancer', 
        icon: 'https://bit.ly/2LDHYkr', 
        description: 'Stats: +45% attack speed | +30% critical strike chance | +5% movement speed \n Passive: \n UNIQUE – SPECTRAL WALTZ: Grants Ghost ghosting and +7% movement speed while within 550 units of a visible enemy champion. \n UNIQUE – LAMENT: Grants 12% damage reduction against the last enemy champion you basic attacked (lasts for 10 seconds and refreshes with each basic attack).', 
        cost: 2700 
      }, {
        name: 'Phantom Dancer', 
        icon: 'https://bit.ly/2LDHYkr', 
        description: 'Stats: +45% attack speed | +30% critical strike chance | +5% movement speed \n Passive: \n UNIQUE – SPECTRAL WALTZ: Grants Ghost ghosting and +7% movement speed while within 550 units of a visible enemy champion. \n UNIQUE – LAMENT: Grants 12% damage reduction against the last enemy champion you basic attacked (lasts for 10 seconds and refreshes with each basic attack).', 
        cost: 2700 
      }, {
        name: 'Phantom Dancer', 
        icon: 'https://bit.ly/2LDHYkr', 
        description: 'Stats: +45% attack speed | +30% critical strike chance | +5% movement speed \n Passive: \n UNIQUE – SPECTRAL WALTZ: Grants Ghost ghosting and +7% movement speed while within 550 units of a visible enemy champion. \n UNIQUE – LAMENT: Grants 12% damage reduction against the last enemy champion you basic attacked (lasts for 10 seconds and refreshes with each basic attack).', 
        cost: 2700 
      }]
    }
  }
}
