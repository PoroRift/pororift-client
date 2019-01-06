import { Component, OnInit, Input } from '@angular/core';
import { Champion } from 'src/app/match-viewer-app/match-viewer-model';

@Component({
  selector: 'match-tile',
  templateUrl: './match-tile.component.html',
  styleUrls: ['./match-tile.component.scss']
})
export class MatchTileComponent implements OnInit {

  @Input() victory: boolean;
  @Input() champion: Champion;

  constructor() { }

  ngOnInit() {
  }

}
