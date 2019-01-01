import { Component, OnInit, Input } from '@angular/core';
import { BuildItem } from '../match-viewer-model';

@Component({
  selector: 'summoner-window-last-build',
  templateUrl: './summoner-window-last-build.component.html',
  styleUrls: ['./summoner-window-last-build.component.scss']
})
export class SummonerWindowLastBuildComponent implements OnInit {

  @Input() lastBuild: BuildItem;
  private itemDescription: string;
  private defaultDescription: string;

  constructor() { }

  ngOnInit() {
    this.defaultDescription = "";
  }

  public onHover(description: string): void {
    this.itemDescription = !description ? this.defaultDescription : description;
  }

  public onClick(description: string): void {
    this.defaultDescription = description;
  }

}
