import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'summoner-window-frame',
  templateUrl: './summoner-window-frame.component.html',
  styleUrls: ['./summoner-window-frame.component.scss']
})
export class SummonerWindowFrameComponent implements OnInit {

  @Input() summonerName: string;

  constructor() { }

  ngOnInit() {
    this.summonerName = "doublelift";
  }

}
