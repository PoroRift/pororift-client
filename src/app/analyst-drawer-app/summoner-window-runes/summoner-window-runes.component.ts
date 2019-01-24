import { Component, OnInit, Input } from '@angular/core';
import { Rune, RuneSet } from '../analyst-drawer-model';

@Component({
  selector: 'summoner-window-runes',
  templateUrl: './summoner-window-runes.component.html',
  styleUrls: ['./summoner-window-runes.component.scss']
})
export class SummonerWindowRunesComponent implements OnInit {
  @Input() runes: RuneSet;
  public runeDescription: string;
  private defaultDescription: string;
  private lastEventTarget: Element;

  constructor() { }

  ngOnInit() {
    this.defaultDescription = '';
  }

  onHover(rune: Rune) {
    this.runeDescription = !rune ?
      this.defaultDescription :
      `<b>${rune.name}</b><br>${rune.description}`;
  }

  onClick(rune: Rune, target: Element) {
    this.defaultDescription = `<b>${rune.name}</b><br>${rune.description}`;

    // Check if user is unselecting selected item.
    if (this.lastEventTarget && this.lastEventTarget === target) {
      target.classList.toggle('active');
      if (!target.classList.contains('active')) {
        this.defaultDescription = '';
      }
    } else {
      target.classList.add('active');
      if (this.lastEventTarget) {
        this.lastEventTarget.classList.remove('active');
      }
      this.lastEventTarget = target;
    }
  }
}
