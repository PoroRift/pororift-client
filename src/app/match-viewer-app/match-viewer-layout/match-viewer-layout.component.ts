import { SidebarItem } from './../../shared/model/sidebar-item';
import { Component, OnInit } from '@angular/core';
import { SideBar } from 'src/app/shared/interface/side-bar';

@Component({
  selector: 'app-match-viewer-layout',
  templateUrl: './match-viewer-layout.component.html',
  styleUrls: ['./match-viewer-layout.component.scss']
})
export class MatchViewerLayoutComponent implements OnInit, SideBar {
  public items: SidebarItem[] = [{
    name: 'something',
    functionName: 'printNumberTwo'
  }, {
    name: 'somethingelse',
    functionName: 'printNumberOne'
  }];

  constructor() { }

  ngOnInit() {
  }

  public eventHandler(functionName: string): void {
    switch (functionName) {
      case 'printNumberTwo':
        this.printNumberTwo();
        break;
      case 'printNumberOne':
        this.printNumberOne();
        break;
    }
    // TODO: handle events
  }

  public printNumberTwo(): void {
    console.log(2);
  }

  public printNumberOne(): void {
    console.log(1);
  }

}
