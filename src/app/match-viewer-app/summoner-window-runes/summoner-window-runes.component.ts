import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'summoner-window-runes',
  templateUrl: './summoner-window-runes.component.html',
  styleUrls: ['./summoner-window-runes.component.scss']
})
export class SummonerWindowRunesComponent implements OnInit {
  
  @Input() runes: object;

  constructor() { }

  ngOnInit() {
  }

}
