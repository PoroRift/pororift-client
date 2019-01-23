import { Component, OnInit, Input } from '@angular/core';
import { BuildItem } from '../analyst-drawer-model';

@Component({
  selector: 'summoner-window-last-build',
  templateUrl: './summoner-window-last-build.component.html',
  styleUrls: ['./summoner-window-last-build.component.scss']
})
export class SummonerWindowLastBuildComponent implements OnInit {

  @Input() lastBuild: BuildItem[];
  private itemDescription: string;
  private defaultDescription: string;
  private lastEventTarget: Element;

  constructor() { }

  ngOnInit() {
    this.defaultDescription = '';
  }

  public onHover(description: string): void {
    this.itemDescription = !description ? this.defaultDescription : description;
  }

  public onClick(description: string, target: Element): void {
    this.defaultDescription = description;

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
