import { Component, OnInit, Input } from '@angular/core';
import { Champion } from '../match-viewer-model';

@Component({
  selector: 'banned-display',
  templateUrl: './banned-display.component.html',
  styleUrls: ['./banned-display.component.scss']
})
export class BannedDisplayComponent implements OnInit {

  @Input() bannedChampions: Champion[] = [];

  constructor() { }

  ngOnInit() {
  }

}
