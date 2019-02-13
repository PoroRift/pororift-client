import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummonerTileComponent } from './summoner-tile.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';

describe('SummonerTileComponent', () => {
  let component: SummonerTileComponent;
  let fixture: ComponentFixture<SummonerTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ CommonModule, SharedModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      declarations: [ SummonerTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummonerTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {

    component.summonerInfo = {
      champion: {
        championName: 'Akali',
        championIcon: 'https://bit.ly/2UsaZUl'
      },
      firstSpell: {
        icon: 'https://bit.ly/2QMvOe2',
        name: 'heal',
        description: ''
      },
      secondSpell: {
        icon: 'https://bit.ly/2L326MC',
        name: 'flash',
        description: ''
      },
      summonerDetail: {
        summonerName: `Summoner's Name`,
        summonerKDA: { kill: 0, death: 0, assist: 0 },
        summonerRank: 'Gold 1'
      },
      runes: {
        primaryPath: {
          name: '',
          icon: ''
        },
        keystone: {
          name: '',
          icon: '',
          description: ''
        },
        primaryPathRunes: [
          {
            name: '',
            icon: '',
            description: ''
          }
        ],
        secondaryPath: {
          name: '',
          icon: ''
        },
        secondaryPathRunes: [
          {
            name: '',
            icon: '',
            description: ''
          }
        ],
      },
      lastBuild: [{
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
      ]
    };
    component.blueTeam = true;

    expect(component).toBeTruthy();
  });
});
