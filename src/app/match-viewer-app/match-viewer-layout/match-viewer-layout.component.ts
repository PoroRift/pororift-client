import { SidebarItem } from './../../shared/model/sidebar-item';
import { Component, OnInit, HostListener } from '@angular/core';
import { SideBar } from 'src/app/shared/interface/side-bar';

@Component({
  selector: 'match-viewer-layout',
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

  public analystWidth = 0;
  private isOnBar = false;
  private allowExpansion = false;
  private prevMousePos = window.innerWidth + 1;

  constructor() { }

  ngOnInit() {}

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: any): void {
    if (this.allowExpansion && (e.screenX - 10) > document.getElementById('side-bar').offsetWidth) {
      this.analystWidth = this.analystWidth + (this.prevMousePos - e.screenX);
    }
    this.prevMousePos = e.screenX;
  }

  @HostListener('document:mouseup')
  onmouseup(): void {
    this.allowExpansion = false;
    document.getElementsByTagName('body')[0].style.cursor = 'default';
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

  public setOnBar(v: boolean) {
    this.isOnBar = v;
  }

  public setClickMove(v: boolean) {
    this.allowExpansion = this.isOnBar && v;
    if (this.allowExpansion) {
      document.getElementsByTagName('body')[0].style.cursor = 'ew-resize';
    }
  }



}
